import Head from "next/head";
import CustomerLayout from "@/Layouts/CustomerLayout";
import UserSideNav from "@/Components/AdminComponents/UserSideNav";
import { useState } from "react";
import UserDashboard from "./dashboard";
import OrderPage from "./order";
import UpdateProfile from "./update-profile";
import ChangePassword from "./change-password";
import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";

const user = () => {
  const [navbarValue, setNavbarValue] = useState("dashboard");
  return (
    <>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <main>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr]">
            <UserSideNav setNavbarValue={setNavbarValue} />
            <div className="p-2">
              {navbarValue === "dashboard" && <UserDashboard />}
              {navbarValue === "my orders" && <OrderPage />}
              {navbarValue === "update profile" && <UpdateProfile />}
              {navbarValue === "change password" && <ChangePassword />}
              {navbarValue === "log out" &&
                "I'm hacker lol! you can't log out me okay! focus your work."}
            </div>
          </div>
        </div>
        <AppStoreBanner />
      </main>
    </>
  );
};

user.getLayout = function (page) {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default user;