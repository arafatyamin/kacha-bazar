import AddNewStaff from "@/Components/AdminComponents/AddNewStaff";
import Button from "@/Components/AdminComponents/Button";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import SelectInput from "@/Components/AdminComponents/SelectInput";
import StaffTable from "@/Components/AdminComponents/StaffTable";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import handleRedirect from "@/auth/handleRedirect";

const OurStaff = () => {
  const [newStaff, setNewStaff] = useState(false);

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
      _id: 7,
      name: "Deliver Person",
    },
  ];

  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">All Staff</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-5 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-2">
            <SearchInput placeholder={"search by coupon code/name"} />
          </div>
          <div className="col-span-2">
            <SelectInput items={staffRole} name={"Staff Role"} />
          </div>

          <div onClick={() => setNewStaff(true)}>
            <Button name={"Add Staff"} />
          </div>
        </div>

        {/* coupons table  */}

        <StaffTable />
      </div>

      <AddNewStaff newStaff={newStaff} setNewStaff={setNewStaff} />
    </section>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

OurStaff.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default OurStaff;
