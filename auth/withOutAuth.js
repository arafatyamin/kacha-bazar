import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

const withOutAuth = (Component) => {
  console.log("using withOutAuth hoc");

  return (props) => {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(true);

    const getUser = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/details",
          {
            withCredentials: true,
          }
        );
        router.push("/user");
      } catch (err) {
        setLoggedIn(false);
      }
    };
    useEffect(() => {
      getUser();
    }, []);

    return !loggedIn ? <Component {...props} /> : null;
  };
};

export default withOutAuth;
