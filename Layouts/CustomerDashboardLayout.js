import Head from "next/head";
import CustomerLayout from "./CustomerLayout";
import UserSideNav from "@/Components/AdminComponents/UserSideNav";
import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";

const CustomerDashboardLayout = ({ children }) => {
  return (
    <CustomerLayout>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <main>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_5fr]">
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
