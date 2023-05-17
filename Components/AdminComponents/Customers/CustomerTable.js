import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { SlMagnifierAdd } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-hot-toast";

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

        <div className="rounded-b-md text-xs bg-white shadow-md border border-t-none font-semibold text-gray-500 ">
          <div className="p-4  flex  justify-between items-center col-span-4">
            {pageData?.total && (
              <p>
                SHOWING {(page - 1) * 10} -{" "}
                {Math.min(page * 10, pageData?.total?.results)} OF{" "}
                {pageData?.total?.results}
              </p>
            )}

            {pageData?.total && (
              <div className="flex items-center">
                <button
                  disabled={pageData?.total?.pages === 1}
                  className="duration-300 flex hover:bg-gray-200 items-center mx-1 p-2 rounded-md"
                  onClick={() => setPage((old) => old - 1)}
                >
                  <AiOutlineLeft />
                </button>

                <button
                  className={`p-2 ${
                    pageData?.page === 1
                      ? "bg-[#07895e] text-white"
                      : "hover:bg-gray-200"
                  }  duration-300 rounded-md mx-1`}
                >
                  1
                </button>

                <button
                  className={`p-2 ${
                    pageData?.page === 2
                      ? "bg-[#07895e] text-white"
                      : "hover:bg-gray-200"
                  }  duration-300 rounded-md mx-1`}
                >
                  2
                </button>
                <button
                  className={`p-2 ${
                    pageData?.page === 3
                      ? "bg-[#07895e] text-white"
                      : "hover:bg-gray-200"
                  }  duration-300 rounded-md mx-1`}
                >
                  3
                </button>

                <span>-</span>

                <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                  {pageData?.total?.pages}
                </button>
                <button
                  disabled={page === pageData?.total?.pages}
                  className="duration-300 flex hover:bg-gray-200 items-center mx-1 p-2 rounded-md"
                  onClick={() => setPage((old) => old + 1)}
                >
                  <AiOutlineRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
