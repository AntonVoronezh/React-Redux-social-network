export const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';
export const ADD_DIALOG = 'ADD_DIALOG';

export const addDialogAC = id => ({ type: ADD_DIALOG, payload: id });
export const addNewDialogTextAC = text => ({ type: ADD_NEW_DIALOG_TEXT, payload:text });