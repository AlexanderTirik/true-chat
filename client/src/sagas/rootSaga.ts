import { all } from "redux-saga/effects";
import chatSagas from "./chatSaga";
import userSagas from "./userSaga";

export default function* rootSaga() {
  yield all([chatSagas(), userSagas()]);
}
