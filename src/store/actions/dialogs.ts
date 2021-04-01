export const ADD_NEW_DIALOG_TEXT = "ADD_NEW_DIALOG_TEXT";
export const ADD_DIALOG = "ADD_DIALOG";

export type AddDialogActionType = {
  type: typeof ADD_DIALOG;
  payload: number;
};

export type AddNewDialogTextActionType = {
  type: typeof ADD_NEW_DIALOG_TEXT;
  payload: string;
};

export const addDialogAC = (id: number): AddDialogActionType => ({
  type: ADD_DIALOG,
  payload: id,
});

export const addNewDialogTextAC = (
  text: string
): AddNewDialogTextActionType => ({ type: ADD_NEW_DIALOG_TEXT, payload: text });
