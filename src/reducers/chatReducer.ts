import { ChatActions } from "../types/chatActionsTypes";
import IMessage from "../types/messageType";

interface IState {
  isLoading: boolean;
  messages?: IMessage[];
  participants?: number;
  messagesNumber?: number;
  chatName: string;
}

interface IAction {
  type: ChatActions;
  payload?: {
    data?: any;
    idMessage?: string;
    messages?: IMessage[];
    participants?: number;
  };
}

const initialState: IState = {
  isLoading: true,
  messages: [],
  participants: 5,
  chatName: "Green Chat",
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case ChatActions.ADD_MESSAGE: {
      const { data } = action.payload!;
      const newMessage: IMessage = { ...data };
      const messages = [...state.messages!];
      messages.push(newMessage);
      return { ...state, messages };
    }
    case ChatActions.EDIT_MESSAGE: {
      const { idMessage, data } = action.payload!;
      const updatedMessages = state.messages!.map((message) => {
        if (message.idMessage === idMessage) {
          return {
            ...message,
            ...data,
          };
        } else {
          return message;
        }
      });
      return { ...state, messages: updatedMessages };
    }
    case ChatActions.DELETE_MESSAGE: {
      const { idMessage } = action.payload!;
      const filteredMessages = state.messages!.filter(
        (message) => message.idMessage !== idMessage
      );
      return { ...state, messages: filteredMessages };
    }
    case ChatActions.CHANGE_LIKE: {
      const { idMessage } = action.payload!;
      const messages = [...state.messages!];
      let message = messages.find((message) => message.idMessage == idMessage);
      message!.likes = Math.abs(message!.likes - 1);
      return { ...state, messages };
    }
    case ChatActions.HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    case ChatActions.INIT_STORAGE: {
      const { messages, participants } = action.payload!;
      return { ...state, messages, participants };
    }
    default:
      return state;
  }
}
