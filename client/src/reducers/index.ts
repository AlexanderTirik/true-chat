import { combineReducers } from "redux";
import chat from "./chatReducer";
import page from "./pageReducer";
import error from "./errorReducer"

const rootReducer = combineReducers({
  chat,
  page,
  error,
});

export default rootReducer;
