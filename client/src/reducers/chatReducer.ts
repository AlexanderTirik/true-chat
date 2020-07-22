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
    case ChatActions.SET_STORAGE: {
      const { messages, participants } = action.payload!;
      return { ...state, messages, participants };
    }
    default:
      return state;
  }
}
