import axios from "axios";

const getOrder = async (context) => {
  try {
    const { id } = context.query;
    const token = context.req.cookies["next-auth.session-token"];

    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/orders/" + id,
      {
        headers: {
          authToken: token,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getOrder;
