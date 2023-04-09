import Header from "@/Components/CommonComponents/Header";
import CustomerFooter from "@/Components/CustomerComponents/CustomerFooter/CustomerFooter";
import React from "react";

const CustomerLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <CustomerFooter />
    </>
  );
};

export default CustomerLayout;
