import { ChatActions } from "../types/chatActionsTypes";
import IMessage from "../types/messageType";

export const initStorage = (messages: IMessage[], participants:number) => ({
  type: ChatActions.INIT_STORAGE,
  payload: {
    messages,
    participants,
  },
});

export const addMessage = (data: IMessage) => ({
  type: ChatActions.ADD_MESSAGE,
  payload: {
    data,
  },
});

export const editMessage = (idMessage: string, data: IMessage) => ({
  type: ChatActions.EDIT_MESSAGE,
  payload: {
    idMessage,
    data,
  },
});

export const deleteMessage = (idMessage: string) => ({
  type: ChatActions.DELETE_MESSAGE,
  payload: {
    idMessage,
  },
});

export const changeLike = (idMessage: string) => ({
  type: ChatActions.CHANGE_LIKE,
  payload: {
    idMessage,
  },
});


