import { combineReducers } from "redux";
import { customerReducer } from "./customer";

const rootReducer = combineReducers({
  customer: customerReducer,
});

export { rootReducer };
