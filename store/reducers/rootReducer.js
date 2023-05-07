import { combineReducers } from "redux";
import { customerReducer } from "./customer";
import adminReducer from "./admin";

const rootReducer = combineReducers({
  admin: adminReducer,
  customer: customerReducer,
});

export default rootReducer;
