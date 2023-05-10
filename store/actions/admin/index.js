import {
  deleteCategoryFulfill,
  deleteCategoryPeinding,
  deleteCategoryReject,
  deleteCouponFulfill,
  deleteCouponPending,
  deleteCouponReject,
  deleteProductFulfill,
  deleteProductPeinding,
  deleteProductReject,
  fetchCategoryFulfill,
  fetchCategoryPeinding,
  fetchCategoryReject,
  fetchCouponError,
  fetchCouponSuccess,
  fetchCouponsStart,
  fetchError,
  fetchProducts,
  fetchSuccess,
  postCategoryFulfill,
  postCategoryPeinding,
  postCategoryReject,
  postCouponError,
  postCouponPending,
  postCouponSuccess,
  postProductError,
  postProductPending,
  postProductSuccess,
  putCategoryFulfill,
  putCategoryPeinding,
  putCategoryReject,
  putProductPending,
  putProductSuccess,
  putProductError,
} from "@/store/actionTypes/actionTypes";

// get products;
export const productsFetchStart = () => {
  return {
    type: fetchProducts,
  };
};
export const productsFetchSuccess = (products) => {
  return {
    type: fetchSuccess,
    payload: products,
  };
};

export const productsFetchError = (error) => {
  return {
    type: fetchError,
    payload: error.message,
  };
};

// post products;
export const postProductsStart = () => {
  return {
    type: postProductPending,
  };
};
export const postProductsSuccess = (product) => {
  return {
    type: postProductSuccess,
    payload: product,
  };
};

export const postProductsError = (error) => {
  return {
    type: postProductError,
    payload: error.message,
  };
};

// update products;
export const putProductFetchStart = () => {
  return {
    type: putProductPending,
  };
};
export const putProductFetchSuccess = (product) => {
  return {
    type: putProductSuccess,
    payload: product,
  };
};

export const putProductFetchError = (error) => {
  return {
    type: putProductError,
    payload: error.message,
  };
};

// delete products
export const deleteProductFetchStart = () => {
  return {
    type: deleteProductPeinding,
  };
};

export const deleteProductFetchSuccess = (id) => {
  return {
    type: deleteProductFulfill,
    payload: id,
  };
};

export const deleteProductFetchError = (error) => {
  return {
    type: deleteProductReject,
    payload: error.message,
  };
};

// get categorys
export const categoryFetchStart = () => {
  return {
    type: fetchCategoryPeinding,
  };
};
export const categoryFetchSuccess = (categorys) => {
  return {
    type: fetchCategoryFulfill,
    payload: categorys,
  };
};

export const categoryFetchError = (error) => {
  return {
    type: fetchCategoryReject,
    payload: error.message,
  };
};

// post categorys
export const categoryPostStart = () => {
  return {
    type: postCategoryPeinding,
  };
};
export const categoryPostSuccess = (category) => {
  return {
    type: postCategoryFulfill,
    payload: category,
  };
};

export const categoryPostError = (error) => {
  return {
    type: postCategoryReject,
    payload: error.message,
  };
};

// update categorys
export const putCategoryFetchStart = () => {
  return {
    type: putCategoryPeinding,
  };
};
export const putCategoryFetchSuccess = (category) => {
  return {
    type: putCategoryFulfill,
    payload: category,
  };
};

export const putCategoryFetchError = (error) => {
  return {
    type: putCategoryReject,
    payload: error.message,
  };
};

// delete categorys
export const deleteCategoryFetchStart = () => {
  return {
    type: deleteCategoryPeinding,
  };
};

export const deleteCategoryFetchSuccess = (id) => {
  return {
    type: deleteCategoryFulfill,
    payload: id,
  };
};

export const deleteCategoryFetchError = (error) => {
  return {
    type: deleteCategoryReject,
    payload: error.message,
  };
};

// get coupons;
export const couponsFetchStart = () => {
  return {
    type: fetchCouponsStart,
  };
};
export const couponsFetchSuccess = (coupons) => {
  return {
    type: fetchCouponSuccess,
    payload: coupons,
  };
};

export const couponsFetchError = (error) => {
  return {
    type: fetchCouponError,
    payload: error.message,
  };
};

// post coupons;
export const postCouponsStart = () => {
  return {
    type: postCouponPending,
  };
};
export const postCouponsSuccess = (coupon) => {
  return {
    type: postCouponSuccess,
    payload: coupon,
  };
};

export const postCouponsError = (error) => {
  return {
    type: postCouponError,
    payload: error.message,
  };
};

// delete coupons
export const deleteCouponFetchStart = () => {
  return {
    type: deleteCouponPending,
  };
};

export const deleteCouponFetchSuccess = (id) => {
  return {
    type: deleteCouponFulfill,
    payload: id,
  };
};

export const deleteCouponFetchError = (error) => {
  return {
    type: deleteCouponReject,
    payload: error.message,
  };
};