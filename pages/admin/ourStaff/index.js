import Button from "@/Components/AdminComponents/Button";
import CouponsTable from "@/Components/AdminComponents/CouponsTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import SelectInput from "@/Components/AdminComponents/SelectInput";
import StaffTable from "@/Components/AdminComponents/StaffTable";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const OurStaff = () => {
  const staffRole = [
    {
      _id: 1,
      name: "Admin",
    },
    {
      _id: 2,
      name: "CEO",
    },
    {
      _id: 3,
      name: "Manager",
    },
    {
      _id: 4,
      name: "Accountant",
    },
    {
      _id: 5,
      name: "Driver",
    },
    {
      _id: 6,
      name: "Security Guard",
    },
    {
      _id: 6,
      name: "Deliver Person",
    },
  ];

  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">All Staff</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-5 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-2">
            <SearchInput placeholder={"search by coupon code/name"} />
          </div>
          <div className="col-span-2">
            <SelectInput items={staffRole} name={"Staff Role"} />
          </div>

          <div>
            <Button name={"Add Staff"} />
          </div>
        </div>

        {/* coupons table  */}

        <StaffTable />
      </div>
    </section>
  );
};

export default OurStaff;

OurStaff.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
