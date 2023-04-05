import CustomerLayout from "@/Layouts/CustomerLayout";
import React from "react";

const about = () => {
  return <div>about</div>;
};

about.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default about;
