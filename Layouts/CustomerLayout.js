import Header from "@/Components/CommonComponents/Header";
import BottomNav from "@/Components/CustomerComponents/BottomNav";
import CustomerFooter from "@/Components/CustomerComponents/CustomerFooter/CustomerFooter";
import React from "react";
import withAuth from "../auth/withAuth";

const CustomerLayout = ({ customer, children }) => {
  return (
    <>
      <Header customer={customer} />
      <BottomNav />
      {children}
      <CustomerFooter />
    </>
  );
};

// export default withAuth(CustomerLayout);
export default CustomerLayout;
