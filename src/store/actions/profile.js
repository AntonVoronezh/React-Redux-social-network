export const ADD_POST = 'ADD_POST';
export const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';

export const addPostAC = () => ({ type: ADD_POST });
export const addNewMessageAC = text => ({ type: ADD_NEW_MESSAGE_TEXT, payload:text });
