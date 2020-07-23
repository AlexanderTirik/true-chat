import { AnyAction } from "redux";
import { call, takeEvery, put, all } from "redux-saga/effects";
import { UserActions } from "../types/userActionsTypes";
import { PageActions } from "../types/pageActionsTypes";
import { ErrorActions } from "../types/errorActionsTypes";
import UserService from "../services/userService";

export function* editUser(action: AnyAction) {
  try {
    yield put({ type: PageActions.SHOW_LOADING });
    const editUserProps = action.payload.editProps;
    const userId = action.payload.userId;
    const editedUser = yield call(UserService.editUser, userId, editUserProps);
    if (editedUser.error) {
      throw new Error(editedUser.message);
    }
  } catch (error) {
    yield put({
      type: ErrorActions.SHOW_ERROR,
      payload: { errorText: error.message },
    });
  } finally {
    yield put({ type: PageActions.HIDE_LOADING });
  }
}

function* watchEditUser() {
  yield takeEvery(UserActions.EDIT_USER, editUser);
}

export function* initStorage(action: AnyAction) {
  try {
    yield put({ type: PageActions.SHOW_LOADING });
    const users = yield call(UserService.getUsers);
    yield put({ type: UserActions.SET_USER_STORAGE, payload: { userList: users } });
  } catch (error) {
    yield put({
      type: ErrorActions.SHOW_ERROR,
      payload: { errorText: error.message },
    });
  } finally {
    yield put({ type: PageActions.HIDE_LOADING });
  }
}

function* watchInitStorage() {
  yield takeEvery(UserActions.INIT_STORAGE, initStorage);
}

export default function* userSagas() {
  yield all([watchEditUser(), watchInitStorage()]);
}
