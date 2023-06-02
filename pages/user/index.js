import CustomerDashboardLayout from "@/Layouts/CustomerDashboardLayout";
import OrderDisplay from "@/Components/AdminComponents/OrderDisplay";
import { SlMagnifierAdd } from "react-icons/sl";
import { AiOutlineSync } from "react-icons/ai";
import { BsCart4, BsCheck2, BsTruck } from "react-icons/bs";
import handleRedirect from "@/auth/handleRedirect";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const dashboard = ({ token }) => {
  const [states, setStates] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStates();
    getOrders();
  }, []);

  const getStates = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/states/orders",
        {
          headers: {
            authToken: token,
          },
        }
      );
      setStates(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getOrders = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          `/customer/orders?page=1&limit=5`,
        {
          headers: {
            authToken: token,
          },
        }
      );
      const { orders, ...data } = response.data.data;
      setOrders(orders);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const orderData = {
    Total: {
      icon: <BsCart4 size={25} color="#FF2F2F" />,
      title: "Total Order",
      bg: "bg-red-200",
    },
    Pending: {
      icon: <AiOutlineSync size={25} color="#FF502B" />,
      title: "Pending Order",
      bg: "bg-orange-200",
    },
    Processing: {
      icon: <BsTruck size={25} color="#3E3EFA" />,
      title: "Processing Order",
      bg: "bg-indigo-200",
    },
    Delivared: {
      icon: <BsCheck2 size={25} color="#06A803" />,
      title: "Complete Order",
      bg: "bg-green-200",
    },
  };

  return (
    <>
      <div>
        <h3 className="mb-3 font-medium">Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {states.map((state, i) => (
            <OrderDisplay
              data={orderData[state.status]}
              state={state}
              key={i}
            />
          ))}
        </div>
        <div className="mt-6">
          <h3 className="mb-2 font-medium">Recent Order</h3>

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
                            {new Date(order?.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
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
            </div>
          </div>
          <div className="text-center">
            <Link
              href={"/user/order"}
              className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "customer");
}

dashboard.getLayout = function (page) {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return (
    <CustomerDashboardLayout loggedIn={loggedIn}>
      {page}
    </CustomerDashboardLayout>
  );
};

export default dashboard;
