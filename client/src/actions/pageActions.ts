import { PageActions } from "../types/pageActionsTypes";

export const hideLoading = () => ({
  type: PageActions.HIDE_LOADING,
});

export const showLoading = () => ({
  type: PageActions.SHOW_LOADING,
});

export const login = () => ({
  type: PageActions.LOGIN,
});
export const logout = () => ({
  type: PageActions.LOGOUT,
});

export const setCurrentId = (id: string) => ({
  type: PageActions.SET_CURRENT_ID,
  payload: {
    id,
  },
});
export const setUserRole = (role: string) => ({
  type: PageActions.SET_USER_ROLE,
  payload: {
    role,
  },
});
