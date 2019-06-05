import { tryLogin, getCaptcha } from '../../helpers/axios/axios';
import { setIsAuthAC } from './auth';

export const ADD_NEW_USERNAME_TEXT = 'ADD_NEW_USERNAME_TEXT';
export const ADD_NEW_PASSWORD_TEXT = 'ADD_NEW_PASSWORD_TEXT';

export const ADD_NEW_CAPTCHA_TEXT = 'ADD_NEW_CAPTCHA_TEXT';

export const CHANGE_REMEMBER = 'CHANGE_REMEMBER';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const CAPTCHA_REQUEST = 'CAPTCHA_REQUEST';
export const CAPTCHA_SUCCESS = 'CAPTCHA_SUCCESS';
export const CAPTCHA_FAILURE = 'CAPTCHA_FAILURE';

export const addNewUsernameTextAC = text => ({ type: ADD_NEW_USERNAME_TEXT, payload: text });
export const addNewPasswordTextAC = text => ({ type: ADD_NEW_PASSWORD_TEXT, payload: text });

export const addNewCaptchaTextAC = text => ({ type: ADD_NEW_CAPTCHA_TEXT, payload: text });

export const changeRememberAC = () => ({ type: CHANGE_REMEMBER });

export const loginRequestAC = () => ({ type: LOGIN_REQUEST });
export const loginSuccessAC = () => ({ type: LOGIN_SUCCESS });
export const loginFailureAC = error => ({ type: LOGIN_FAILURE, payload: error });

export const loginErrorAC = error => ({ type: LOGIN_ERROR, payload: error });

export const captchaRequestAC = () => ({ type: CAPTCHA_REQUEST });
export const captchaSuccessAC = url => ({ type: CAPTCHA_SUCCESS, payload: url });
export const captchaFailureAC = error => ({ type: CAPTCHA_FAILURE, payload: error });

export const login = () => async (dispatch, getState) => {
	dispatch(loginRequestAC());

	const state = getState().login.form;

	try {
		const responce = await tryLogin(state.email, state.password, state.rememberMe, state.captcha );

		if (responce.resultCode === 0) {
			dispatch(loginSuccessAC(responce));
			dispatch(setIsAuthAC(true));
		} else if (responce.resultCode === 1) {
			dispatch(loginErrorAC(responce.messages[0]));
		} else if (responce.resultCode === 10) {
			dispatch(captchaRequestAC());

			try {
				const captchaUrl = await getCaptcha();
				dispatch(captchaSuccessAC(captchaUrl.url));
			} catch (err) {
				dispatch(captchaFailureAC(err));
			}
		}
	} catch (err) {
		dispatch(loginFailureAC(err));
	}
};


