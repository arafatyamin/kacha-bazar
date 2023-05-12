import axios from "axios";

const getCategories = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/categories?page=1&limit=18"
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getCategories;
