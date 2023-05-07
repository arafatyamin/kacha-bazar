import { combineReducers } from "redux";
import { customerReducer } from "./customer";
import productsReducers from "@/store/reducers/productsReducers/productsReducers";
import cartReducer from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  products: productsReducers,
  cart: cartReducer
});

export default rootReducer;
