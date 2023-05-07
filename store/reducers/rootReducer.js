import { combineReducers } from "redux";
import { customerReducer } from "./customer";
import cartReducer from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  cart: cartReducer
});

export default rootReducer;
