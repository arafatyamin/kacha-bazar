const {
  ADD_TO_CART,
  DECREASE_FROM_CART,
  REMOVE_FROM_CART,
} = require("@/store/actionTypes/actionTypes");

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isFound_in_add = state.cart.filter(
        (item) => item.id == action.payload.id
      );
      if (isFound_in_add.length>0) {
        isFound_in_add[0].count += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        action.payload.count = 1;
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case DECREASE_FROM_CART:
      let isFound_in_decrease = state.cart.filter(
        (item) => item.id == action.payload.id
      );
      isFound_in_decrease[0].count -= 1;
      return {
        ...state,
        cart: [...state.cart],
      };
    case REMOVE_FROM_CART:
      let newState = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: [...newState],
      };
    default:
      return state;
  }
};

export default cartReducer;
