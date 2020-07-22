import { combineReducers } from "redux";
import chat from "./chatReducer";
import outgoingMessage from "./outgoingMessageReducer";
import page from "./pageReducer";

const rootReducer = combineReducers({
  chat,
  outgoingMessage,
  page,
});

export default rootReducer;
