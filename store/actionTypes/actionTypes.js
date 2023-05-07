export const LOADING_START = "LOADING_START";
export const FETCH_START = "FETCH_START";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

// _____________Admin______________

// get product
export const fetchProducts = "product/fetch-start";
export const fetchError = "product/fetch-error";
export const fetchSuccess = "product/fetch-success";

// get category
export const fetchCategoryPeinding = "category/peinding";
export const fetchCategoryReject = "category/reject";
export const fetchCategoryFulfill = "category/fullfill";

// post category
export const postCategoryPeinding = "post-category/peinding";
export const postCategoryReject = "post-category/reject";
export const postCategoryFulfill = "post-category/fullfill";

// update category
export const putCategoryPeinding = "put-category/peinding";
export const putCategoryReject = "put-category/reject";
export const putCategoryFulfill = "put-category/fullfill";

// deleted category
export const deleteCategoryPeinding = "delete-category/peinding";
export const deleteCategoryReject = "delete-category/reject";
export const deleteCategoryFulfill = "delete-category/fullfill";
