import React from "react";
import AdminLayout from "../Layouts/AdminLayout";


const contact = () => {
  return <div>contact</div>;
};

contact.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default contact;
