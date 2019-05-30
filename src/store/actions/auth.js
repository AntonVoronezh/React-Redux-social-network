import { getMe, logOut } from '../../helpers/axios/axios';

export const SET_IS_AUTH = 'SET_IS_AUTH';
export const SET_USER = 'SET_USER';

export const ME_REQUEST = 'ME_REQUEST';
export const ME_SUCCESS = 'ME_SUCCESS';
export const ME_FAILURE = 'ME_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const setIsAuthAC = value => ({ type: SET_IS_AUTH, payload: value });

export const meRequestAC = () => ({ type: ME_REQUEST });
export const meSuccessAC = (userId, userName) => ({ type: ME_SUCCESS, payload: { userId, userName } });
export const meFailureAC = error => ({ type: ME_FAILURE, payload: error });



