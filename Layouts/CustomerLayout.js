import Header from "@/Components/CommonComponents/Header";
import BottomNav from "@/Components/CustomerComponents/BottomNav";
import CustomerFooter from "@/Components/CustomerComponents/CustomerFooter/CustomerFooter";
import withAuth from "../auth/withAuth";
import { Provider } from "react-redux";
import store from "../store/store";

const CustomerLayout = ({ loggedIn, children }) => {
  return (
    <>
      <Provider store={store}>
        <Header loggedIn={loggedIn} />
        <BottomNav />
        {children}
        <CustomerFooter />
      </Provider>
    </>
  );
};

// export default withAuth(CustomerLayout);
export default CustomerLayout;
