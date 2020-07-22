import { ErrorActions } from "../types/errorActionsTypes";

interface IState {
  isShown: boolean;
  currentError: string;
}

interface IAction {
  type: ErrorActions;
  payload?: {
    errorText?: string;
  };
}

const initialState: IState = {
  isShown: false,
  currentError: "",
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case ErrorActions.HIDE_ERROR: {
      return { ...state, isShown: false };
    }
    case ErrorActions.SHOW_ERROR: {
      const { errorText } = action.payload!;
      return { ...state, isShown: true, currentError: errorText };
    }
    default:
      return state;
  }
}
