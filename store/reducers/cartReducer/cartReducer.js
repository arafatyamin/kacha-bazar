const {
  ADD_TO_CART,
  DECREASE_FROM_CART,
  REMOVE_FROM_CART,
} = require("@/store/actionTypes/actionTypes");

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product.id === action.payload.id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedProduct.id
        );
        selectedProduct.userQuantity += 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, userQuantity: 1 }],
      };
    case DECREASE_FROM_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedProduct.id
        );
        selectedProduct.userQuantity -= 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
