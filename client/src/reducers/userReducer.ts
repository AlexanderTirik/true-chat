import { UserActions } from "../types/userActionsTypes";
import IUser from "../types/userType";
interface IState {
  userList?: IUser[];
}

interface IAction {
  type: UserActions;
  payload?: {
    userList: string;
  };
}

const initialState: IState = {};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case UserActions.SET_USER_STORAGE: {
      const { userList } = action.payload!;
      return { ...state, userList };
    }
    default:
      return state;
  }
}
