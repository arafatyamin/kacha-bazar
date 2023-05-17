const initialData = [];

const categoryReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_CATEGORIES":
      return [...action.categories];

    case "ADD_CATEGORY":
      return [...state, action.category];

    case "UPDATE_CATEGORY":
      const updadtedCategories = [...state];
      const cateIndex = updadtedCategories.findIndex(
        (c) => c.id === action.category.id
      );
      updadtedCategories?.splice(cateIndex, 1, action.category);
      return [...updadtedCategories];

    case "REMOVE_CATEGORY":
      const newCategories = [...state];
      newCategories?.splice(action.index, 1);
      return [...newCategories];

    case "ADD_SUB_CATEGORY":
      const tempCategories = [...state];
      const catIndex = tempCategories.findIndex(
        (c) => c.id === action.category
      );
      tempCategories[catIndex].subCategories.push(action.subCategory);
      return [...tempCategories];

    default:
      return state;
  }
};

export default categoryReducer;
