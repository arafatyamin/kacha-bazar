const initialData = [];

const productReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [...action.products];

    case "ADD_PRODUCT":
      return [...state, action.product];

    case "UPDATE_PRODUCT":
      const updadtedProducts = [...state];
      const index = updadtedProducts.findIndex(
        (p) => p.id === action.product.id
      );
      updadtedProducts?.splice(index, 1, action.product);
      return [...updadtedProducts];

    case "REMOVE_PRODUCT":
      const newProducts = [...state];
      newProducts?.splice(action.index, 1);
      return [...newProducts];

    default:
      return state;
  }
};

export default productReducer;
