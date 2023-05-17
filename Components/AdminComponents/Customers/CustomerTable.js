import { useState, useEffect } from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-hot-toast";
import Pagination from "../Pagination";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCustomers();
  }, [page]);

  const getCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          `/admin/customers?page=${page}&limit=10`,
        {
          withCredentials: true,
        }
      );
      const { customers, ...data } = response.data.data;
      setPageData(data);
      setCustomers(customers);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCustomer = (id, name, index) => {
    swal({
      title: "Are you sure?",
      text: `Delete "${name}"`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL + `/admin/customers/${id}`
          );
          const newCustomers = [...customers];
          newCustomers.splice(index, 1);
          setCustomers(newCustomers);
          toast.success("Customer Deleted");
        } catch (err) {
          console.log(err);
          toast.error("Something went wrong");
        }
      }
    });
  };

  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        {loading ? (
          <div className="text-center p-3">
            <h2>Loading...</h2>
          </div>
        ) : (
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
              <tr className="text-left ">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">JOINING DATE</th>
                <th className="p-3 w-[250px]">NAME</th>
                <th className="p-3 w-[400px]">EMAIL </th>
                <th className="p-3">PHONE</th>
                <th className="p-3">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {customers?.map((customer, i) => (
                <tr
                  key={i}
                  className="text-left bg-white border-b border-opacity-20 border-gray-700 "
                >
                  <th className="px-3 py-2 text-left">
                    <span>{customer?.id?.toUpperCase()}</span>
                  </th>
                  <td className="px-3 py-2 text-left">
                    <span>{customer?.joiningDate}</span>
                  </td>

                  <td className="px-3 py-2">
                    <span>{customer?.name}</span>
                  </td>
                  <td className="px-3 py-2">
                    <span>{customer?.email}</span>
                  </td>
                  <td className="px-3 py-2">
                    <span>{customer?.phone}</span>
                  </td>

                  <td className="px-3 py-2">
                    <div className="flex justify-center items-center">
                      <button className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300">
                        <SlMagnifierAdd />
                      </button>

                      <button
                        className="text-lg mr-2 font-normal text-gray-400 hover:text-red-600 duration-300"
                        onClick={() =>
                          deleteCustomer(customer?.id, customer?.name, i)
                        }
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Pagination pageData={pageData} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default CustomerTable;
