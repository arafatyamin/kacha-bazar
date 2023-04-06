import Header from "@/Components/AdminComponents/Header";
import SideBar from "@/Components/AdminComponents/SideBar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="">
          <SideBar />
        </div>

        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
