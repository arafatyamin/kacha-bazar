const initialData = [];

const couponReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_COUPONS":
      return [...action.coupons];

    case "ADD_COUPON":
      return [...state, action.coupon];

    case "UPDATE_COUPON":
      const updadtedCoupons = [...state];
      const index = updadtedCoupons.findIndex((c) => c.id === action.coupon.id);
      updadtedCoupons?.splice(index, 1, action.coupon);
      return [...updadtedCoupons];

    case "REMOVE_COUPON":
      const newCoupons = [...state];
      newCoupons?.splice(action.index, 1);
      return [...newCoupons];

    default:
      return state;
  }
};

export default couponReducer;
