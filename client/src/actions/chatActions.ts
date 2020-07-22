import { ChatActions } from "../types/chatActionsTypes";
import IMessage from "../types/messageType";

export const setStorage = (messages: IMessage[], participants: number) => ({
  type: ChatActions.SET_STORAGE,
  payload: {
    messages,
    participants,
  },
});
export const initStorage = () => ({
  type: ChatActions.INIT_STORAGE,
});

export const addMessage = (data: { userId: string; text: string }) => ({
  type: ChatActions.ADD_MESSAGE,
  payload: {
    data,
  },
});

export const editMessage = (idMessage: string, text: string) => ({
  type: ChatActions.EDIT_MESSAGE,
  payload: {
    idMessage,
    text,
  },
});

export const deleteMessage = (idMessage: string) => ({
  type: ChatActions.DELETE_MESSAGE,
  payload: {
    idMessage,
  },
});

export const changeLike = (
  idMessage: string,
  userId: string,
  likesId: string[]
) => ({
  type: ChatActions.CHANGE_LIKE,
  payload: {
    idMessage,
    userId,
    likesId,
  },
});
