import { combineReducers } from "redux";
import productReducer from "./productsReducer.js";
import categoryReducer from "./categoriesReducer.js";

const adminReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
});

export default adminReducer;
