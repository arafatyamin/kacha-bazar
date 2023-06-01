import isLoggedIn from "./isLoggedIn";

const handleStatus = async (context) => {
  const { loggedIn, user, token } = await isLoggedIn(context);
  return {
    props: {
      loggedIn,

      ...(user
        ? {
            user,
            token,
          }
        : {}),
    },
  };
};

export default handleStatus;
