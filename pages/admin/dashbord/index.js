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
import getSales from "@/utils/getSales";
import getOrdersCount from "@/utils/getOrdersCount";
import getTopSellingProducts from "@/utils/getTopSellingProducts";

const Dashbord = ({ sales, ordersCount, topSelling }) => {
  const salesData = {
    today: { time: "Today Order", color: "#0D969B", FiLayers },
    month: {
      time: "This Month",
      color: "#1887FA",
    },
    all: {
      time: "Total Order",
      color: "#059C62",
    },
  };

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
              {sales?.map((sale, i) => (
                <TotalOrderCard
                  key={i}
                  data={salesData[sale.period]}
                  sale={sale?.sale}
                ></TotalOrderCard>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-9 ">
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-red-200  ">
                  <FiShoppingCart className="text-red-500"></FiShoppingCart>
                </div>
                <div>
                  <div className="   ">Total Order</div>
                  <div className=" font-semibold text-2xl">
                    {ordersCount?.find((c) => c.status === "Total")?.count || 0}
                  </div>
                </div>
              </div>
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-sky-200  ">
                  <MdSync className="text-blue-500 text-xl"></MdSync>
                </div>
                <div>
                  <div className="   ">Order Pending</div>
                  <div className=" font-semibold text-2xl">
                    {ordersCount?.find((c) => c.status === "Pending")?.count ||
                      0}
                  </div>
                </div>
              </div>
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-teal-200  ">
                  <BsTruck className="text-red-500"></BsTruck>
                </div>
                <div>
                  <div className="   ">Order Processing</div>
                  <div className=" font-semibold text-2xl">
                    {ordersCount?.find((c) => c.status === "Processing")
                      ?.count || 0}
                  </div>
                </div>
              </div>
              <div className="flex border border-solid items-center rounded-md rounded-5 max-w-60 h-auto bg-white py-4 ">
                <div className=" p-4 m-3 rounded-full bg-pink-200  ">
                  <AiOutlineCheck className="text-green-600"></AiOutlineCheck>
                </div>
                <div>
                  <div className="   ">Order Delivered</div>
                  <div className=" font-semibold text-2xl">
                    {ordersCount?.find((c) => c.status === "Delivered")
                      ?.count || 0}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Charts topSelling={topSelling} />
            </div>

            {/* <div className="my-10">
              <AdminTable></AdminTable>
            </div> */}
          </div>
        </section>
      </main>
    </>
    // <div>hello</div>
  );
};

export async function getServerSideProps(context) {
  const sales = await getSales(context);
  const ordersCount = await getOrdersCount(context);
  const topSelling = await getTopSellingProducts(context);
  return await handleRedirect(context, "admin", {
    sales,
    ordersCount,
    topSelling,
  });
}

Dashbord.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Dashbord;
