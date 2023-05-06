import Head from "next/head";
import CustomerLayout from "./CustomerLayout";
import ProtectedLayout from "./ProtectedLayout";
import UserSideNav from "@/Components/AdminComponents/UserSideNav";
import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";

const CustomerDashboardLayout = ({ customer, children }) => {
  return (
    <CustomerLayout customer={customer}>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <main>
        <div className="container">
          <div className="flex gap-10">
            <UserSideNav />
            <div className="p-2">{children}</div>
          </div>
        </div>
        <AppStoreBanner />
      </main>
    </CustomerLayout>
  );
};

export default CustomerDashboardLayout;
