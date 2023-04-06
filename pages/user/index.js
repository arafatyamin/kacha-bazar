import CustomerLayout from "@/Layouts/CustomerLayout";

const user = () => {
  return <div>User Panel</div>;
};

user.getLayout = function (page) {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default user;
