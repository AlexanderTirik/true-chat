import { ErrorActions } from "../types/errorActionsTypes";

export const showError = (errorText:string) => ({
  type: ErrorActions.SHOW_ERROR,
  payload: {
    errorText,
  },
});
export const hideError = () => ({
  type: ErrorActions.HIDE_ERROR,
});
