import { combineReducers } from "redux";
import productReducer from "./productsReducer.js";
import categoryReducer from "./categoriesReducer.js/index.js";
import couponReducer from "./couponsReducer";

const adminReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  coupons: couponReducer,
});

export default adminReducer;
