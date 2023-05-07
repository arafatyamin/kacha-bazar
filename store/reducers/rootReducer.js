import { combineReducers } from "redux";
import { customerReducer } from "./customer";
import adminReducer from "./admin";
import cartReducer from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  customer: customerReducer,
  cart: cartReducer,
});

export default rootReducer;
