import CustomerDashboardLayout from "@/Layouts/CustomerDashboardLayout";
import OrderDisplay from "@/Components/AdminComponents/OrderDisplay";
import OrdersTable from "@/Components/AdminComponents/Orders/OrdersTable";
import { orderItems } from "@/data/data";
import handleRedirect from "@/auth/handleRedirect";

const dashboard = () => {
  return (
    <>
      <div>
        <h3 className="mb-3 font-medium">Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {orderItems.map((orderItem) => (
            <OrderDisplay data={orderItem} key={orderItem._id} />
          ))}
        </div>
        <div className="mt-6">
          <h3 className="mb-2 font-medium">Recent Order</h3>
          <OrdersTable />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "customer");
}

dashboard.getLayout = function (page) {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return (
    <CustomerDashboardLayout loggedIn={loggedIn}>
      {page}
    </CustomerDashboardLayout>
  );
};

export default dashboard;
