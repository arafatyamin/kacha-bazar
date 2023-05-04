import { useRouter } from "next/router";

const withAuth = (Component) => {
  console.log("using hoc");

  return (props) => {
    const router = useRouter();
    let isAuthenticated = false; // check authentication status
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      if (typeof window !== "undefined") {
        router.push("/login");
      }
      return null;
    }
  };
};

export default withAuth;
