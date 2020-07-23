import { UserActions } from "../types/userActionsTypes";
import IUser from "../types/userType";

export const setStorage = (userList: IUser[]) => ({
  type: UserActions.SET_USER_STORAGE,
  payload: {
    userList,
  },
});

export const initStorage = () => ({
  type: UserActions.INIT_STORAGE,
});
export const editUser = (
  userId: string,
  changedUserProp: {
    avatar: string;
    user: string;
    password: string;
    role: string;
  }
) => ({
  type: UserActions.EDIT_USER,
  payload: {
    editProps: changedUserProp,
    userId,
  },
});
