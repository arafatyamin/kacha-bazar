import axios from "@/axios";
import {
  categoryFetchStart,
  categoryFetchError,
  categoryFetchSuccess,
  putCategoryFetchError,
  putCategoryFetchSuccess,
  putCategoryFetchStart,
  deleteCategoryFetchStart,
  deleteCategoryFetchSuccess,
  deleteCategoryFetchError,
  categoryPostStart,
  categoryPostSuccess,
} from "@/store/actions/admin";

import toast from "react-hot-toast";

// get category
export const getCategorysData = () => {
  return async (dispatch) => {
    // dispatch(categoryFetchStart());

    try {
      const response = await axios.get("/categories");
      dispatch({
        type: "ADD_CATEGORIES",
        catetgories: response?.data?.data,
      });
    } catch (error) {
      // dispatch(categoryFetchError(error));
    }
  };
};

// post Category
export const postCategoryData = (data, setNewCategory) => {
  return async (dispatch) => {
    dispatch(categoryPostStart());
    try {
      const response = await axios.post("/categories", data);
      dispatch(categoryPostSuccess(response?.data?.data));
      setNewCategory(false);
      toast.success("new category added successfully!");
    } catch (error) {
      dispatch(postCategoryReject(error));
      toast.error(error.message);
    }
  };
};

// update category
export const updatedCategoryData = (categoryData, id, showUpdate) => {
  return async (dispatch) => {
    dispatch(putCategoryFetchStart());
    try {
      const response = await axios.put(`/categories/${id}`, categoryData);

      dispatch(putCategoryFetchSuccess(response?.data?.data));
      showUpdate(false);
      toast.success("category update successfully!");
    } catch (error) {
      dispatch(putCategoryFetchError(error));
      toast.error(error.message);
    }
  };
};

// delete category
export const removeCategoryData = (id) => {
  return async (dispatch) => {
    dispatch(deleteCategoryFetchStart());
    try {
      const response = await axios.delete(`/categories/${id}`);

      dispatch(deleteCategoryFetchSuccess(id));
      toast.success("category delete successfully!");
    } catch (error) {
      dispatch(deleteCategoryFetchError(error));
      toast.error(error.message);
    }
  };
};
