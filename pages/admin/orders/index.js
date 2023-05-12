import OrdersTable from "@/Components/AdminComponents/OrdersTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import SelectInput from "@/Components/AdminComponents/SelectInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import handleRedirect from "@/auth/handleRedirect";

const Order = () => {
  const status = [
    {
      _id: 1,
      name: "Delivary",
    },
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
      name: "Cancel",
    },
  ];

  const orderLimits = [
    {
      _id: 1,
      name: "Last 5 Days Orders",
    },
    {
      _id: 2,
      name: "Last 7 Days Orders",
    },
    {
      _id: 3,
      name: "Last 10 Days Orders",
    },
    {
      _id: 4,
      name: "Last 15 Days Orders",
    },
    {
      _id: 5,
      name: "Last 30 Days Orders",
    },
  ];

  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Orders</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <SearchInput placeholder={"search by phone"} />

          <div>{<SelectInput items={status} name={"Status"} />}</div>
          <div>{<SelectInput items={orderLimits} name={"Order Limits"} />}</div>
          <div>
            <button className="w-full h-full flex justify-center items-center p-3 lg:p-0 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
              Download all Orders <AiOutlineCloudDownload className="ml-3" />
            </button>
          </div>
        </div>

        {/* oorder table  */}

        <OrdersTable />
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

Order.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Order;
