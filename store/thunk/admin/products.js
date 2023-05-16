import axios from "@/axios";
import {
  productsFetchStart,
  productsFetchSuccess,
  productsFetchError,
  postProductsError,
  postProductsSuccess,
  postProductsStart,
  deleteProductFetchError,
  deleteProductFetchSuccess,
  deleteProductFetchStart,
  putProductFetchStart,
  putProductFetchSuccess,
  putProductFetchError,
} from "@/store/actions/admin";
import toast from "react-hot-toast";

// get all products
export const getProductsData = async (dispatch) => {
  dispatch(productsFetchStart());

  try {
    const response = await axios.get("/products");

    dispatch(productsFetchSuccess(response?.data?.data));
  } catch (error) {
    dispatch(productsFetchError(error));
  }
};

// post new product
export const postNewProduct = (data, setNewProduct) => {
  return async (dispatch) => {
    dispatch(postProductsStart());
    try {
      const response = await axios.post("/products", data);
      dispatch(postProductsSuccess(response?.data?.data));
      toast.success("New Product Added Successfully!");
      setNewProduct(false);
    } catch (error) {
      dispatch(postProductsError(error));
      toast.error(error.message);
    }
  };
};

// post new product
export const updateProduct = (id, data, setUpdateModal) => {
  return async (dispatch) => {
    dispatch(putProductFetchStart());
    try {
      const response = await axios.put(`/products/${id}`, data);

      dispatch(putProductFetchSuccess(response?.data?.data));
      toast.success("Product Update Successfully!");
      setUpdateModal(false);
    } catch (error) {
      dispatch(putProductFetchError(error));
      toast.error(error.message);
    }
  };
};

// delete product
export const removeProductData = (id) => {
  return async (dispatch) => {
    dispatch(deleteProductFetchStart());
    try {
      const response = await axios.delete(`/products/${id}`);

      dispatch(deleteProductFetchSuccess(id));
      toast.success("Product Delete Successfully!");
    } catch (error) {
      dispatch(deleteProductFetchError(error));
      toast.error(error.message);
    }
  };
};
