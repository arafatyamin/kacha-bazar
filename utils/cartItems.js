import axios from "axios";
import store from "../store/store";

const getCartItems = async (token) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/cart",
      {
        withCredentials: true,
        headers: {
          authToken: store.getState()?.user?.token || null,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const addToCart = async (data, token) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/cart",
      data,
      {
        withCredentials: true,
        headers: {
          authToken: store.getState()?.user?.token || null,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const updateCart = async (data, token) => {
  try {
    const response = await axios.put(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/cart",
      data,
      {
        withCredentials: true,
        headers: {
          authToken: store.getState()?.user?.token || null,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const removeCart = async (data, token) => {
  try {
    const response = await axios.delete(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        "/customer/cart/" +
        data?.productId,
      {
        withCredentials: true,
        headers: {
          authToken: store.getState()?.user?.token || null,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { getCartItems, addToCart, updateCart, removeCart };
