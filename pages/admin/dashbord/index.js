import AdminLayout from "@/Layouts/AdminLayout";
import Head from "next/head";
import { FiLayers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { ImCreditCard } from "react-icons/im";
import { MdSync } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import TotalOrderCard from "@/Components/AdminComponents/TotalOrderCard ";
import Charts from "@/Components/AdminComponents/Charts";
import AdminTable from "@/Components/AdminComponents/AdminTable";
import handleRedirect from "@/auth/handleRedirect";

const Dashbord = () => {
  const orders = [
    { time: "Today Order", price: "$197", color: "#0D969B", FiLayers },
    {
      time: "This Month",
      price: "$1145.00",
      color: "#1887FA",
      FiLayers: FiShoppingCart,
    },
    {
      time: "Total Order",
      price: "$44088.35",
      color: "#059C62",
      FiLayers: ImCreditCard,
    },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Dashboard</title>
      </Head>
      <main>
        <section className=" bg-gray-100 min-h-screen">
          <div className="max-w-[1024px] mx-auto px-5">
            <div>
              <h3 className="font-semibold py-3 text-lg">Dashboard Overview</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {orders.map((order, i) => (
                <TotalOrderCard key={i} order={order}></TotalOrderCard>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-9 ">
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-red-200  ">
                  <FiShoppingCart className="text-red-500"></FiShoppingCart>
                </div>
                <div>
                  <div className="   ">Total Order</div>
                  <div className=" font-semibold text-2xl">330</div>
                </div>
              </div>
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-sky-200  ">
                  <MdSync className="text-blue-500 text-xl"></MdSync>
                </div>
                <div>
                  <div className="   ">Order Pending</div>
                  <div className=" text-orange-500 font-semibold ">
                    (9895.90)
                  </div>
                  <div className=" font-semibold text-2xl">71</div>
                </div>
              </div>
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-teal-200  ">
                  <BsTruck className="text-red-500"></BsTruck>
                </div>
                <div>
                  <div className="   ">Order Processing</div>
                  <div className=" font-semibold text-2xl">41</div>
                </div>
              </div>
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-pink-200  ">
                  <AiOutlineCheck className="text-green-600"></AiOutlineCheck>
                </div>
                <div>
                  <div className="   ">Order Delivered</div>
                  <div className=" font-semibold text-2xl">218</div>
                </div>
              </div>
            </div>

            <div>
              <Charts />
            </div>

            <div className="my-10">
              <AdminTable></AdminTable>
            </div>
          </div>
        </section>
      </main>
    </>
    // <div>hello</div>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

Dashbord.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Dashbord;
