import axios from "axios";

const getProducts = async (page, limit) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        `/products?page=${page || 1}&limit=${limit || 10}`
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getProducts;
