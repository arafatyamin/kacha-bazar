import CustomerFooter from "@/Components/CustomerComponents/CustomerFooter/CustomerFooter";
import CustomerHeader from "@/Components/CustomerComponents/CustomerHeader/CustomerHeader";
import React from "react";

const CustomerLayout = ({ children }) => {
  return (
    <>
      <CustomerHeader />
      {children}
      <CustomerFooter />
    </>
  );
};

export default CustomerLayout;
