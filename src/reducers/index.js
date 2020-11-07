import { combineReducers } from "redux";
import user from "./user";
import onlineUsers from "./onlineUsers";

const rootReducer = combineReducers({
  user,
  onlineUsers,
});

export default rootReducer;
