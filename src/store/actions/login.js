import { tryLogin } from '../../helpers/axios/axios';
import { setIsAuthAC } from './auth';

export const ADD_NEW_USERNAME_TEXT = 'ADD_NEW_USERNAME_TEXT';
export const ADD_NEW_PASSWORD_TEXT = 'ADD_NEW_PASSWORD_TEXT';
export const CHANGE_REMEMBER = 'CHANGE_REMEMBER';
// export const VALIDATION_FORM = 'VALIDATION_FORM';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const addNewUsernameTextAC = text => ({ type: ADD_NEW_USERNAME_TEXT, payload: text });
export const addNewPasswordTextAC = text => ({ type: ADD_NEW_PASSWORD_TEXT, payload: text });
export const changeRememberAC = () => ({ type: CHANGE_REMEMBER });

export const loginRequestAC = () => ({ type: LOGIN_REQUEST });
export const loginSuccessAC = () => ({ type: LOGIN_SUCCESS });
export const loginFailureAC = error => ({ type: LOGIN_FAILURE, payload: error });

export const loginErrorAC = error => ({ type: LOGIN_ERROR, payload: error });
// export const validationFormAC = () => ({ type: VALIDATION_FORM });

export const login = (email, password, rememberMe) => async dispatch => {
	dispatch(loginRequestAC());

	try {
		const responce = await tryLogin(email, password, rememberMe);

		if (responce.data.resultCode === 0) {
			dispatch(loginSuccessAC(responce.data));
			dispatch(setIsAuthAC(true))
		} else {
			dispatch(loginErrorAC(responce.data.messages[0]));
		}
	} catch (err) {
		dispatch(loginFailureAC(err));
	}
};
