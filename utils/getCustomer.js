import axios from "axios";

const getCustomer = async (token) => {
  try {
    console.log(store.getState()?.user?.token, token);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/details",
      {
        headers: {
          authToken: token,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    // console.log(err);
    return null;
  }
};

export default getCustomer;
