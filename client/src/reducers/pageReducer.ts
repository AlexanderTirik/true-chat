import { PageActions } from "../types/pageActionsTypes";

interface IState {
  isLoading: boolean;
  isLogged: boolean;
  userId?: string;
}

interface IAction {
  type: PageActions;
  payload?: {
    id: string;
    role: string;
  };
}

const initialState: IState = {
  isLoading: true,
  isLogged: false,
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case PageActions.HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    case PageActions.SHOW_LOADING: {
      return { ...state, isLoading: true };
    }
    case PageActions.LOGIN: {
      return { ...state, isLogged: true };
    }
    case PageActions.LOGOUT: {
      return { ...state, isLogged: false };
    }
    case PageActions.SET_CURRENT_ID: {
      const { id } = action.payload!;
      return { ...state, userId: id };
    }
    case PageActions.SET_USER_ROLE: {
      const { role } = action.payload!;
      return { ...state, userRole: role };
    }
    default:
      return state;
  }
}
