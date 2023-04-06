import CustomerTable from "@/Components/AdminComponents/CustomerTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Customers = () => {
  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Customers</h3>

        {/* products search section  */}
        <div className="my-3 w-full py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-2">
            <SearchInput placeholder={"search by customer name/email/phone"} />
          </div>
        </div>

        {/* customer table  */}
        <CustomerTable />
      </div>
    </section>
  );
};

export default Customers;

Customers.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
