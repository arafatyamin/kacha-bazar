import Header from "@/Components/AdminComponents/Header";
import SideBar from "@/Components/AdminComponents/SideBar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
