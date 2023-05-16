const initialData = {
  products: [],
  categories: [],
};

const adminReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_CATEGORIES":
      return {
        ...state,
        categories: [...action.categories],
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    case "UPDATE_CATEGORY":
      const updadtedCategories = [...state.categories];
      const cateIndex = updadtedCategories.findIndex(
        (c) => c.id === action.category.id
      );
      updadtedCategories?.splice(cateIndex, 1, action.category);
      return {
        ...state,
        categories: [...updadtedCategories],
      };
    case "REMOVE_CATEGORY":
      const newCategories = [...state.categories];
      newCategories?.splice(action.index, 1);
      return {
        ...state,
        categories: [...newCategories],
      };
    case "ADD_SUB_CATEGORY":
      const tempCategories = [...state.categories];
      const catIndex = tempCategories.findIndex(
        (c) => c.id === action.category
      );
      tempCategories[catIndex].subCategories.push(action.subCategory);
      return {
        ...state,
        categories: [...tempCategories],
      };
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
