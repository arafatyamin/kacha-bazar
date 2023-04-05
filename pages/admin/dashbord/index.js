import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Dashbord = () => {
  return <div>this is dashbord</div>;
};

export default Dashbord;

Dashbord.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
