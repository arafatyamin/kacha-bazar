import axios from "axios";

const getSales = async (context) => {
  const { req } = context;
  const cookies = req.headers.cookie;

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        "/admin/orders-salse-by-period",
      {
        withCredentials: true,
        headers: {
          Cookie: cookies,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getSales;
