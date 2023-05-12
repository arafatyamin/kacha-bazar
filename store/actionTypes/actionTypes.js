export const LOADING_START = "LOADING_START";
export const FETCH_START = "FETCH_START";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

// _____________Admin______________

// get product
export const fetchProducts = "product/fetch-start";
export const fetchError = "product/fetch-error";
export const fetchSuccess = "product/fetch-success";

// post product
export const postProductPending = "product/fetch-peinding";
export const postProductError = "product/fetch-reject";
export const postProductSuccess = "product/fetch-fullfill";

// update product
export const putProductPending = "put-product/fetch-peinding";
export const putProductError = "put-product/fetch-reject";
export const putProductSuccess = "put-product/fetch-fullfill";

// deleted product
export const deleteProductPeinding = "delete-product/peinding";
export const deleteProductReject = "delete-product/reject";
export const deleteProductFulfill = "delete-product/fullfill";

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

// cart
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DECREASE_FROM_CART = "DECREASE_FROM_CART";


// get product
export const fetchCouponsStart = "coupon/fetch-start";
export const fetchCouponError = "coupon/fetch-error";
export const fetchCouponSuccess = "coupon/fetch-success";

// post product
export const postCouponPending = "coupon/fetch-pending";
export const postCouponError = "coupon/fetch-reject";
export const postCouponSuccess = "coupon/fetch-fullfill";

// deleted product
export const deleteCouponPending = "delete-coupon/pending";
export const deleteCouponReject = "delete-coupon/reject";
export const deleteCouponFulfill = "delete-coupon/fullfill";