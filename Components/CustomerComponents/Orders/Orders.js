import { SlMagnifierAdd } from "react-icons/sl";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Pagination from "@/Components/AdminComponents/Pagination";
import Link from "next/link";

const OrdersTable = ({ token }) => {
  const router = useRouter();
  const { route } = router;
  const status = [
    {
      _id: 2,
      name: "Pending",
    },
    {
      _id: 3,
      name: "Processing",
    },
    {
      _id: 4,
      name: "Canceled",
    },
    {
      _id: 1,
      name: "Delivared",
    },
  ];

  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders();
  }, [page]);

  const getOrders = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          `/customer/orders?page=${page}&limit=10`,
        {
          headers: {
            authToken: token,
          },
        }
      );
      const { orders, ...data } = response.data.data;
      setOrders(orders);
      setPageData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
            <tr className="text-left ">
              <th title="Ranking" className="p-3 text-left">
                SR NO
              </th>
              <th className="p-3 text-left">TIME</th>
              <th className="p-3">SHIPPING ADDRESS</th>
              <th className="p-3">PHONE</th>
              <th className="p-3">METHOD</th>
              <th className="p-3">AMOUNT</th>
              <th className="p-3">STATUS</th>
              {/* <th className="p-3">ACTIONS</th> */}
              <th className="p-3">INVOICE</th>
            </tr>
          </thead>

          {loading ? (
            <tbody className="text-[14px]">
              <tr>
                <td class="p-3 text-center" colspan="9">
                  <h3>Loading...</h3>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-[14px]">
              {orders?.map((order, i) => (
                <tr
                  key={i}
                  className="text-left bg-white border-b border-opacity-20 border-gray-700 "
                >
                  <th className="px-3 py-2 text-left">
                    <span>{i + 1}</span>
                  </th>
                  <td className="px-3 py-2 text-left">
                    <span>
                      {new Date(order?.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <span>{order?.shippingAddress}</span>
                  </td>
                  <td className="px-3 py-2">
                    <span>{order?.phone || "not found"}</span>
                  </td>
                  <th className="px-3 py-2">
                    <span>{order?.paymentMethod}</span>
                  </th>
                  <td className="px-3 py-2 ">
                    <span>${order?.total} </span>
                  </td>
                  <td className="px-3  py-2 ">
                    <span
                      className={`py-1 px-3  rounded-full  
                      ${order?.status === "Pending" ? "bg-[#f6ea81]" : ""}
                      ${
                        order?.status === "Processing"
                          ? "bg-[#8adbff] text[#008eff]"
                          : ""
                      }
                      ${
                        order?.status === "Canceled"
                          ? "bg-red-600/20  text-red-600"
                          : ""
                      }
                      ${
                        order?.status === "Delivared"
                          ? "bg-green-600/20 text-green-600"
                          : ""
                      }
                      `}
                    >
                      <span>{order?.status}</span>
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex justify-end items-center">
                      <Link
                        href={"/order?id=" + order?.id}
                        className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300"
                      >
                        <SlMagnifierAdd />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        <Pagination pageData={pageData} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default OrdersTable;
