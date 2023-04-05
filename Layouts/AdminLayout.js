import Header from "@/Components/AdminComponents/Header";
import SideBar from "@/Components/AdminComponents/SideBar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        {children}
      </div>
      <h2>Admin Footer</h2>
    </div>
  );
};

export default AdminLayout;
