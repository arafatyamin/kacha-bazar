import { combineReducers } from "redux";
import { customerReducer } from "./customer";
import adminReducer from "./admin";
import cartReducer from "./cartReducer/cartReducer";
import orderReducer from "./orderReducer/orderReducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  customer: customerReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;
