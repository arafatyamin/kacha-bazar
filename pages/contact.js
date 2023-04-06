import React from "react";
import CustomerLayout from "@/Layouts/CustomerLayout";

const contact = () => {
  return <div>contact</div>;
};

contact.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default contact;
