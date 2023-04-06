import Button from "@/Components/AdminComponents/Button";
import CouponsTable from "@/Components/AdminComponents/CouponsTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Coupons = () => {
  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Coupons</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-3">
            <SearchInput placeholder={"search by coupon code/name"} />
          </div>

          <div>
            <Button name={"Add Coupon"} />
          </div>
        </div>

        {/* coupons table  */}

        <CouponsTable />
      </div>
    </section>
  );
};

export default Coupons;

Coupons.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
