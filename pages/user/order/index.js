import CustomerDashboardLayout from "@/Layouts/CustomerDashboardLayout";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import handleRedirect from "@/auth/handleRedirect";
import { useSelector } from "react-redux";
import Link from "next/link";
import OrdersTable from "@/Components/CustomerComponents/Orders/Orders";

const OrderPage = ({token}) => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col bg-white">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <OrdersTable token={token} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "customer");
}

OrderPage.getLayout = function (page) {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return (
    <CustomerDashboardLayout loggedIn={loggedIn}>
      {page}
    </CustomerDashboardLayout>
  );
};

export default OrderPage;
