import { combineReducers } from "redux";
import { customerReducer } from "./customer";
import productsReducers from "@/store/reducers/productsReducers/productsReducers";

const rootReducer = combineReducers({
  customer: customerReducer,
  products: productsReducers,
});

export default rootReducer;
