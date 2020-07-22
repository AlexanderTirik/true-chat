import { all } from "redux-saga/effects";
import chatSagas from "./chatSaga"

export default function* rootSaga() {
  yield all([
    chatSagas()
  ]);
}
