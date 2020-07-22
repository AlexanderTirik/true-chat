import { ChatActions } from "../types/chatActionsTypes";
import { ErrorActions } from "../types/errorActionsTypes";
import ChatService from "../services/chatService";
import { PageActions } from "../types/pageActionsTypes";
import { call, takeEvery, put, all } from "redux-saga/effects";
import { AnyAction } from "redux";

export function* addMessage(action: AnyAction) {
  try {
    const userId = action.payload.data.userId;
    const messageText = action.payload.data.text;
    yield put({ type: PageActions.SHOW_LOADING });
    const newMessage = yield call(ChatService.sendMessage, messageText, userId);
    if (newMessage.error) {
      throw new Error(newMessage.message);
    }
    const messages = yield call(ChatService.loadChatData);
    yield put({ type: ChatActions.SET_STORAGE, payload: { ...messages } });
  } catch (error) {
    yield put({
      type: ErrorActions.SHOW_ERROR,
      payload: { errorText: error.message },
    });
  } finally {
    yield put({ type: PageActions.HIDE_LOADING });
  }
}

function* watchAddMessage() {
  yield takeEvery(ChatActions.ADD_MESSAGE, addMessage);
}

export function* deleteMessage(action: AnyAction) {
  try {
    const messageId = action.payload.idMessage;
    yield put({ type: PageActions.SHOW_LOADING });
    const deletedMessage = yield call(ChatService.deleteMessage, messageId);
    if (deletedMessage.error) {
      throw new Error(deletedMessage.message);
    }
    const messages = yield call(ChatService.loadChatData);
    yield put({ type: ChatActions.SET_STORAGE, payload: { ...messages } });
  } catch (error) {
    yield put({
      type: ErrorActions.SHOW_ERROR,
      payload: { errorText: error.message },
    });
  } finally {
    yield put({ type: PageActions.HIDE_LOADING });
  }
}

function* watchDeleteMessage() {
  yield takeEvery(ChatActions.DELETE_MESSAGE, deleteMessage);
}

export function* initChat(action: AnyAction) {
  try {
    yield put({ type: PageActions.SHOW_LOADING });
    const messages = yield call(ChatService.loadChatData);
    yield put({ type: ChatActions.SET_STORAGE, payload: { ...messages } });
  } catch (error) {
    yield put({
      type: ErrorActions.SHOW_ERROR,
      payload: { errorText: error.message },
    });
  } finally {
    yield put({ type: PageActions.HIDE_LOADING });
  }
}

function* watchInitChat() {
  yield takeEvery(ChatActions.INIT_STORAGE, initChat);
}

export function* editMessage(action: AnyAction) {
  try {
    const messageId = action.payload.idMessage;
    const newText = action.payload.text;
    yield put({ type: PageActions.SHOW_LOADING });
    const editedMessage = yield call(
      ChatService.editMessage,
      messageId,
      newText
    );
    if (editedMessage.error) {
      throw new Error(editedMessage.message);
    }
    const messages = yield call(ChatService.loadChatData);
    yield put({ type: ChatActions.SET_STORAGE, payload: { ...messages } });
  } catch (error) {
    yield put({
      type: ErrorActions.SHOW_ERROR,
      payload: { errorText: error.message },
    });
  } finally {
    yield put({ type: PageActions.HIDE_LOADING });
  }
}

function* watchEditMessage() {
  yield takeEvery(ChatActions.EDIT_MESSAGE, editMessage);
}

export function* changeLike(action: AnyAction) {
  try {
    yield put({ type: PageActions.SHOW_LOADING });
    const messageId = action.payload.idMessage;
    const userId = action.payload.userId;
    const likesId = action.payload.likesId;
    const indexUser = likesId.indexOf(userId);
    if (~indexUser) {
      likesId.splice(indexUser, 1);
    } else {
      likesId.push(userId);
    }
    
    const changedLike = yield call(
      ChatService.changeLike,
      messageId,
      userId,
      likesId
    );
    if (changedLike.error) {
      throw new Error(changedLike.message);
    }
    const messages = yield call(ChatService.loadChatData);
    yield put({ type: ChatActions.SET_STORAGE, payload: { ...messages } });
  } catch (error) {
    yield put({
      type: ErrorActions.SHOW_ERROR,
      payload: { errorText: error.message },
    });
  } finally {
    yield put({ type: PageActions.HIDE_LOADING });
  }
}

function* watchChangeLike() {
  yield takeEvery(ChatActions.CHANGE_LIKE, changeLike);
}

export default function* chatSagas() {
  yield all([
    watchAddMessage(),
    watchDeleteMessage(),
    watchInitChat(),
    watchEditMessage(),
    watchChangeLike(),
  ]);
}
