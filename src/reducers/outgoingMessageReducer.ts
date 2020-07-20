import { OutgoingMessageActions } from "../types/OutgoingMessageActionTypes";

interface IState {
  isShownEditPage: boolean;
  currentMessageId: string;
}

interface IAction {
  type: OutgoingMessageActions;
  payload?: {
    idMessage?: string;
  };
}

const initialState: IState = {
  isShownEditPage: false,
  currentMessageId: "",
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case OutgoingMessageActions.HIDE_MODAL: {
      return { ...state, isShownEditPage: false };
    }
    case OutgoingMessageActions.SHOW_MODAL: {
      return { ...state, isShownEditPage: true };
    }
    case OutgoingMessageActions.SET_CURRENT_MESSAGE_ID: {
      const { idMessage } = action.payload!;
      return { ...state, currentMessageId: idMessage };
    }
    default:
      return state;
  }
}
