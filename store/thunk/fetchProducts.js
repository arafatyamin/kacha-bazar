import axios from "axios";
import { loadProducts } from "@/store/actions/productsAction";

const loadProductsData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        "https://kacha-bazar-backend.up.railway.app/products"
      );
      if (response.status === 200) {
        const { data } = response.data;
        dispatch(loadProducts(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default loadProductsData;
