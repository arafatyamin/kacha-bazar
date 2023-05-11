import CustomerDashboardLayout from "@/Layouts/CustomerDashboardLayout";
import OrderDisplay from "@/Components/AdminComponents/OrderDisplay";
import OrdersTable from "@/Components/AdminComponents/OrdersTable";
import { orderItems } from "@/data/data";
import getCustomer from "@/utils/getCustomer";

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

// export async function getServerSideProps(context) {
//   let customer = await getCustomer(context);

//   if (!customer) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return { props: { customer } };
// }

dashboard.getLayout = function (page) {
  const customer = null;
  return (
    <CustomerDashboardLayout customer={customer}>
      {page}
    </CustomerDashboardLayout>
  );
};

export default dashboard;
