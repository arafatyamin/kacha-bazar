import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import categoryReducer from "./categoriesReducer";
import couponReducer from "./couponsReducer";

const adminReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  coupons: couponReducer,
});

export default adminReducer;
