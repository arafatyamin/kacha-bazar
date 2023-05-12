import isLoggedIn from "./isLoggedIn";

const handleLPRedirect = async (context) => {
  const { loggedIn, user } = await isLoggedIn(context);

  if (loggedIn) {
    if (user.type === "admin") {
      return {
        redirect: {
          destination: "/admin/dashbord",
          permanent: false,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/user",
          permanent: false,
        },
      };
    }
  } else {
    return { props: {} };
  }
};

export default handleLPRedirect;
