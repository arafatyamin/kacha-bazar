const initialData = {
  products: [],
};

const adminReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: [...action.products],
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "UPDATE_PRODUCT":
      const updadtedProducts = [...state.products];
      const index = updadtedProducts.findIndex(
        (p) => p.id === action.product.id
      );
      updadtedProducts?.splice(index, 1, action.product);
      return {
        ...state,
        products: [...updadtedProducts],
      };
    case "REMOVE_PRODUCT":
      const newProducts = [...state.products];
      newProducts?.splice(action.index, 1);
      return {
        ...state,
        products: [...newProducts],
      };
    default:
      return state;
  }
};

export default adminReducer;
