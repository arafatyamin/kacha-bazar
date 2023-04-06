import SelectInput from "@/Components/AdminComponents/SelectInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Setting = () => {
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
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Edit Profile</h3>

        <div className="my-3  grid grid-cols-1 lg:grid-cols-3 p-6  gap-6 rounded-md shadow-sm bg-white">
          <p className="p-6">Profile Picture</p>
          <div className="col-span-2 ">
            <fieldset className="w-full space-y-1 text-gray-100">
              <div className="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-300 text-gray-400 "
                />
              </div>
            </fieldset>

            <div className="w-[100px] h-[100px] p-2 border my-2 rounded-md">
              <img src="https://i.ibb.co/WpM5yZZ/9.png" alt="user avatar" />
            </div>
          </div>

          <p className="">Name</p>
          <div className="col-span-2 ">
            <input
              type="text"
              defaultValue={"Admin"}
              className="w-full p-3 rounded-md border bg-gray-100"
            />
          </div>

          <p className="">Email</p>
          <div className="col-span-2 ">
            <input
              type="text"
              defaultValue={"admin@gmail.com"}
              className="w-full p-3 rounded-md border bg-gray-100"
            />
          </div>

          <p className="">Contact Number</p>
          <div className="col-span-2 ">
            <input
              type="text"
              defaultValue={"360-943-7332"}
              className="w-full p-3 rounded-md border bg-gray-100"
            />
          </div>
          <p className="">Your Role</p>
          <div className="col-span-2 ">
            <SelectInput items={staffRole} name={"Role"} />
          </div>

          <div className="col-span-3 flex justify-end">
            <button className="py-3 px-6 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setting;

Setting.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};