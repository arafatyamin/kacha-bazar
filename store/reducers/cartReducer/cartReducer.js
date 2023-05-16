const {
  ADD_TO_CART,
  DECREASE_FROM_CART,
  REMOVE_FROM_CART,
} = require("@/store/actionTypes/actionTypes");

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.findIndex(
    (product) => product.id === action.payload.id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct !== -1) {
        const newCartItems = [...state.cart];
        newCartItems[selectedProduct].userQuantity += 1;
        return {
          ...state,
          cart: [...newCartItems],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, userQuantity: 1 }],
      };
    case DECREASE_FROM_CART:
      if (selectedProduct !== -1) {
        const newCartItems = [...state.cart];
        newCartItems[selectedProduct].userQuantity -= 1;
        return {
          ...state,
          cart: [...newCartItems],
        };
      }
    case REMOVE_FROM_CART:
      const tempCartItems = [...state.cart];
      tempCartItems.splice(selectedProduct, 1);
      return {
        ...state,
        cart: [...tempCartItems],
      };
    default:
      return state;
  }
};

export default cartReducer;
