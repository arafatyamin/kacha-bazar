import OrderDisplay from "@/Components/AdminComponents/OrderDisplay";
import OrdersTable from "@/Components/AdminComponents/OrdersTable";
import { orderItems } from "@/data/data";

const UserDashboard = () => {
  return (
    <div>
      <h3 className="mb-3 font-medium">Dashboard</h3>
      <div className="grid grid-cols-4 gap-3">
        {orderItems.map((orderItem) => (
          <OrderDisplay data={orderItem} key={orderItem._id} />
        ))}
      </div>
      <div className="mt-6">
        <h3 className="mb-2 font-medium">Recent Order</h3>
        <OrdersTable />
      </div>
    </div>
  );
};

export default UserDashboard;
