import { combineReducers } from "redux";
import chat from "./chatReducer";
import page from "./pageReducer";
import error from "./errorReducer"
import user from "./userReducer"

const rootReducer = combineReducers({
  chat,
  page,
  error,
  user,
});

export default rootReducer;
