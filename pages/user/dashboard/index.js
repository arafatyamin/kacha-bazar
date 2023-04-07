import OrderDisplay from "@/Components/AdminComponents/OrderDisplay";
import { orderItems } from "@/data/data";

const UserDashboard = () => {
  return (
    <div>
      <h2 className="mb-3 text-2xl">Dashboard</h2>
      <div className="grid grid-cols-4 gap-3">
        {orderItems.map((orderItem) => (
          <OrderDisplay data={orderItem} key={orderItem._id} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
