import axios from "@/axios";
import {
    couponsFetchError,
    couponsFetchStart,
    couponsFetchSuccess,
    deleteCouponFetchError,
    deleteCouponFetchStart,
    deleteCouponFetchSuccess,
    postCouponsError,
    postCouponsStart,
    postCouponsSuccess,
} from "@/store/actions/admin";
import toast from "react-hot-toast";

// get all coupons
export const getCouponsData = async (dispatch) => {
  dispatch(couponsFetchStart());

  try {
    const response = await axios.get("/admin/coupons");

    dispatch(couponsFetchSuccess(response?.data?.data));
  } catch (error) {
    dispatch(couponsFetchError(error));
  }
};

// post new product
export const postNewCoupon = (data, setNewCoupon) => {
  return async (dispatch) => {
    dispatch(postCouponsStart());
    try {
      const response = await axios.post("/admin/coupons", data);
      dispatch(postCouponsSuccess(response?.data?.data));
      toast.success("New Coupon Added Successfully!");
      setNewCoupon(false);
    } catch (error) {
      dispatch(postCouponsError(error));
      toast.error(error.message);
    }
  };
};

// delete product
export const removeCouponData = (id) => {
  return async (dispatch) => {
    dispatch(deleteCouponFetchStart());
    try {
      const response = await axios.delete(`/admin/coupons/${id}`);

      dispatch(deleteCouponFetchSuccess(id));
      toast.success("Coupon Delete Successfully!");
    } catch (error) {
      dispatch(deleteCouponFetchError(error));
      toast.error(error.message);
    }
  };
};
