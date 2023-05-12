import Header from "@/Components/CommonComponents/Header";
import BottomNav from "@/Components/CustomerComponents/BottomNav";
import CustomerFooter from "@/Components/CustomerComponents/CustomerFooter/CustomerFooter";
import withAuth from "../auth/withAuth";

const CustomerLayout = ({ loggedIn, children }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <BottomNav />
      {children}
      <CustomerFooter />
    </>
  );
};

// export default withAuth(CustomerLayout);
export default CustomerLayout;
