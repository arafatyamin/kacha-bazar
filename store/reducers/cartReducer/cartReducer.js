// const {
//   ADD_TO_CART,
//   DECREASE_FROM_CART,
//   REMOVE_FROM_CART,
// } = require("@/store/actionTypes/actionTypes");

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  // const selectedProduct = state.cart.findIndex(
  //   (item) => item.id === action?.payload?.id || 0
  // );
  switch (action.type) {
    case "LOAD_CART_ITEMS":
      console.log(action.cartItems);
      return {
        ...state,
        cart: [...action.cartItems],
      };

    case "ADD_TO_CART": {
      const tempItems = [...state.cart];
      tempItems.push(action.item);
      return {
        ...state,
        cart: [...tempItems],
      };
    }

    case "UPDATE_CART": {
      const tempItems = [...state.cart];
      tempItems[action.index].quantity = action.quantity;
      return {
        ...state,
        cart: [...tempItems],
      };
    }
    case "REMOVE_CART": {
      const tempItems = [...state.cart];
      let index;

      if (!action.index) {
        index = tempItems.findIndex((item) => item.product.id === action.id);
      } else {
        index = action.index;
      }

      tempItems.splice(index, 1);
      return {
        ...state,
        cart: [...tempItems],
      };
    }

    // case ADD_TO_CART:
    //   if (selectedProduct !== -1) {
    //     const newCartItems = [...state.cart];
    //     newCartItems[selectedProduct].quantity += 1;
    //     return {
    //       ...state,
    //       cart: [...newCartItems],
    //     };
    //   }
    //   return {
    //     ...state,
    //     cart: [
    //       ...state.cart,
    //       {
    //         ...action.payload,
    //         quantity: 1,
    //       },
    //     ],
    //   };
    // case DECREASE_FROM_CART:
    //   if (selectedProduct !== -1) {
    //     const newCartItems = [...state.cart];
    //     newCartItems[selectedProduct].quantity -= 1;
    //     return {
    //       ...state,
    //       cart: [...newCartItems],
    //     };
    //   }
    // case REMOVE_FROM_CART:
    //   const tempCartItems = [...state.cart];
    //   tempCartItems.splice(selectedProduct, 1);
    //   return {
    //     ...state,
    //     cart: [...tempCartItems],
    //   };
    default:
      return state;
  }
};

export default cartReducer;
