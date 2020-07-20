import { combineReducers } from "redux";
import chat from "./chatReducer"
import outgoingMessage from "./outgoingMessageReducer"

const rootReducer = combineReducers({
    chat,
    outgoingMessage
});

export default rootReducer;
