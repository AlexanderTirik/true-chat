import { OutgoingMessageActions } from "../types/OutgoingMessageActionTypes";

export const hideModal = () => ({
  type: OutgoingMessageActions.HIDE_MODAL,
});

export const showModal = () => ({
  type: OutgoingMessageActions.SHOW_MODAL,
});

export const setEdited = () => ({
  type: OutgoingMessageActions.SET_EDITED,
});
export const setCurrentMessageId = (idMessage:string) => ({
  type: OutgoingMessageActions.SET_CURRENT_MESSAGE_ID,
  payload: {
    idMessage,
  },
})
