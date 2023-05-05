import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import store from "../store";

const withAuth = (Component) => {
  console.log("using hoc");

  return (props) => {
    const router = useRouter();
    const [data, setData] = useState(null);

    const getUser = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/details",
          {
            withCredentials: true,
          }
        );
        const data = response.data.data;
        store.dispatch({
          type: "UPDATE_CUSTOMER",
          customer: { isLoggedIn: true, ...data },
        });
        setData(data);
      } catch (err) {
        router.push("/login");
      }
    };
    useEffect(() => {
      getUser();
    }, []);

    return !!data ? <Component {...props} /> : null;
  };
};

export default withAuth;
