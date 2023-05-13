import isLoggedIn from "./isLoggedIn";

const handleRedirect = async (context, role, props) => {
  const { loggedIn, user } = await isLoggedIn(context);

  if (!loggedIn) {
    return {
      redirect: {
        destination: role === "admin" ? "/admin/login" : "/login",
        permanent: false,
      },
    };
  } else {
    if (role === "admin") {
      if (user.type === "customer") {
        return {
          redirect: {
            destination: "/user",
            permanent: false,
          },
        };
      } else {
        return { props: { ...props } };
      }
    }
    if (role === "customer") {
      if (user.type === "admin") {
        return {
          redirect: {
            destination: "/admin/dashbord",
            permanent: false,
          },
        };
      } else {
        return { props: { ...props, loggedIn } };
      }
    }
  }
};

export default handleRedirect;
