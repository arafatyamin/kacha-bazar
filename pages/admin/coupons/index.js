import AddNewCoupons from "@/Components/AdminComponents/AddNewCoupons";
import Button from "@/Components/AdminComponents/Button";
import CouponsTable from "@/Components/AdminComponents/CouponsTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import handleRedirect from "@/auth/handleRedirect";

const Coupons = () => {
  const [newCoupon, setNewCoupon] = useState(false);

  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Coupons</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-3">
            <SearchInput placeholder={"search by coupon code/name"} />
          </div>

          <div onClick={() => setNewCoupon(true)}>
            <Button name={"Add Coupon"} />
          </div>
        </div>

        {/* coupons table  */}
        <CouponsTable />
      </div>

      <AddNewCoupons newCoupon={newCoupon} setNewCoupon={setNewCoupon} />
    </section>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

Coupons.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Coupons;
