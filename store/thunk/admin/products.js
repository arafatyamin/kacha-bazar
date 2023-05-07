import axios from "@/axios";
import {
  productsFetchStart,
  productsFetchSuccess,
  productsFetchError,
} from "@/store/actions/admin";

export const getProductsData = async (dispatch) => {
  dispatch(productsFetchStart());

  try {
    const response = await axios.get("/products");

    dispatch(productsFetchSuccess(response?.data?.data));
  } catch (error) {
    dispatch(productsFetchError(error));
  }
};
