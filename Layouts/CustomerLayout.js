import Header from "@/Components/CommonComponents/Header";
import BottomNav from "@/Components/CustomerComponents/BottomNav";
import CustomerFooter from "@/Components/CustomerComponents/CustomerFooter/CustomerFooter";
import React from "react";

const CustomerLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BottomNav/>
      {children}
      <CustomerFooter />
    </>
  );
};

export default CustomerLayout;
