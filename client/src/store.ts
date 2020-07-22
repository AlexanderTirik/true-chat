import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
export default createStore(
    rootReducer,
    // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
