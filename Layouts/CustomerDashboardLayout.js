import Head from "next/head";
import CustomerLayout from "./CustomerLayout";
import ProtectedLayout from "./ProtectedLayout";
import UserSideNav from "@/Components/AdminComponents/UserSideNav";
import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";

const CustomerDashboardLayout = ({ loggedIn, children }) => {
  return (
    <CustomerLayout loggedIn={loggedIn}>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <main>
        <div className="container">
          <div className="flex gap-10">
            <UserSideNav />
            <div className="p-2 w-full">{children}</div>
          </div>
        </div>
        <AppStoreBanner />
      </main>
    </CustomerLayout>
  );
};

export default CustomerDashboardLayout;
