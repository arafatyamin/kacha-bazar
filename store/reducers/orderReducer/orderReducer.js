import { ORDER_CONFIRM } from "@/store/actionTypes/actionTypes";

const initialState = {
  products: [],
  subTotal: 0,
  discount: 0,
  shippingCost: 0,
  total: 0,
  paymentMethod: "",
  shippingAddress: {},
};

const orderReducer = (state = initialState, action) => {
  const { payload } = action;
  const productsArray = payload?.cartItemsArray?.map((product) => ({
    id: product.id,
    quanity: product.userQuantity,
    price: product.price,
  }));
  switch (action.type) {
    case ORDER_CONFIRM:
      return {
        ...state,
        products: productsArray,
        shippingAddress: `${payload.shippingAddress}, ${payload.city}, ${payload.country}, ${payload.zip}`,
      };
    default:
      return state;
  }
};

export default orderReducer;
