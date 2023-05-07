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
      isFound_in_add.count += 1;

      let newState_in_add = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      if (isFound) {
        return {
          ...state,
          cart: [...newState_in_add, isFound_in_add],
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
      isFound_in_decrease.count -= 1;

      let newState_in_decrease = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: [...newState_in_decrease, isFound_in_decrease],
      };
    case REMOVE_FROM_CART:
      let newState_in_remove = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: [...newState_in_remove],
      };
    default:
      return state;
  }
};

export default cartReducer;
