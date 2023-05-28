import axios from "axios";

const getCartItems = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/cart",
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const addToCart = async (data) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/cart",
      data,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const updateCart = async (data) => {
  try {
    const response = await axios.put(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/cart",
      data,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const removeCart = async (data) => {
  try {
    const response = await axios.delete(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        "/customer/cart/" +
        data?.productId,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { getCartItems, addToCart, updateCart, removeCart };
