import {
  fetchCategoryFulfill,
  fetchCategoryReject,
  fetchError,
  fetchProducts,
  fetchSuccess,
  putCategoryFulfill,
  putCategoryReject,
  putCategoryPeinding,
  fetchCategoryPeinding,
  deleteCategoryPeinding,
  deleteCategoryReject,
  deleteCategoryFulfill,
  postCategoryFulfill,
  postCategoryPeinding,
  postCategoryReject,
} from "@/store/actionTypes/actionTypes";
import initialState from "@/store/initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // products
    case fetchProducts:
      return {
        ...state,
        isLoading: true,
      };

    case fetchError:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    case fetchSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        products: action.payload,
      };

    // get categorys
    case fetchCategoryPeinding:
      return {
        ...state,
        categoryLoading: true,
      };

    case fetchCategoryReject:
      return {
        ...state,
        categoryLoading: false,
        categoryError: true,
        error: action.payload,
      };

    case fetchCategoryFulfill:
      return {
        ...state,
        categoryLoading: false,
        categoryError: false,
        error: "",
        categories: action.payload,
      };

    // post category
    case postCategoryPeinding:
      return {
        ...state,
        postCategoryLoading: true,
      };

    case postCategoryReject:
      return {
        ...state,
        postCategoryLoading: false,
        postCategoryError: true,
        error: action.payload,
      };

    case postCategoryFulfill:
      return {
        ...state,
        postCategoryLoading: false,
        postCategoryError: false,
        error: "",
        categories: [...state.categories, action.payload],
      };

    // update category
    case putCategoryPeinding:
      return {
        ...state,
        updatedLoading: true,
        updatedError: false,
        error: "",
        updateSuccess: false,
      };

    case putCategoryReject:
      return {
        ...state,
        updatedLoading: false,
        updatedError: true,
        error: action.payload,
        updateSuccess: false,
      };

    case putCategoryFulfill:
      const index = state.categories.findIndex(
        (c) => c.id === action.payload.id
      );

      state.categories[index] = action.payload;
      return {
        ...state,
        updatedLoading: false,
        updatedError: false,
        error: "",
        updateSuccess: true,
      };

    // update category
    case deleteCategoryPeinding:
      return {
        ...state,
        deleteLoading: true,
        deleteError: false,
        error: "",
        deleteSuccess: false,
      };

    case deleteCategoryReject:
      return {
        ...state,
        deleteLoading: false,
        deleteError: true,
        error: action.payload,
        deleteSuccess: false,
      };

    case deleteCategoryFulfill:
      return {
        ...state,
        updatedLoading: false,
        updatedError: false,
        error: "",
        updateSuccess: true,
        categories: state.categories.filter((c) => c.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
