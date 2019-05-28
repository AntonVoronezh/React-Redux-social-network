import { tryLogin } from '../../helpers/axios/axios';
export const ADD_NEW_USERNAME_TEXT = 'ADD_NEW_USERNAME_TEXT';

export const ADD_NEW_PASSWORD_TEXT = 'ADD_NEW_PASSWORD_TEXT';
export const CHANGE_REMEMBER = 'CHANGE_REMEMBER';
// export const VALIDATION_FORM = 'VALIDATION_FORM';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const AUTH_ERROR = 'AUTH_ERROR';

export const addNewUsernameTextAC = text => ({ type: ADD_NEW_USERNAME_TEXT, payload: text });
export const addNewPasswordTextAC = text => ({ type: ADD_NEW_PASSWORD_TEXT, payload: text });
export const changeRememberAC = () => ({ type: CHANGE_REMEMBER });

export const authRequestAC = () => ({ type: AUTH_REQUEST });
export const authSuccessAC = () => ({ type: AUTH_SUCCESS });
export const authFailureAC = error => ({ type: AUTH_FAILURE, payload: error });

export const authErrorAC = error => ({ type: AUTH_ERROR, payload: error });
// export const validationFormAC = () => ({ type: VALIDATION_FORM });

export const login = (email, password, rememberMe) => async dispatch => {
	dispatch(authRequestAC());

	try {
		const responce = await tryLogin(email, password, rememberMe);
		
		if(responce.data.resultCode === 0) {
			dispatch(authSuccessAC(responce.data));
		} else {
			dispatch(authErrorAC(responce.data.messages[0]));
		}
		
	} catch (err) {
		dispatch(authFailureAC(err));
	}
};
