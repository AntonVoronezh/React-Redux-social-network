import statuses from '../../helpers/axios/constants';

import { ADD_NEW_PASSWORD_TEXT, ADD_NEW_USERNAME_TEXT, CHANGE_REMEMBER, ADD_NEW_CAPTCHA_TEXT } from '../actions/login';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_ERROR } from '../actions/login';
import { CAPTCHA_REQUEST, CAPTCHA_FAILURE, CAPTCHA_SUCCESS } from '../actions/login';

const initialState = {
	form: {
		email: '',
		password: '',
		rememberMe: false,
		captchaRequired: false,
		capthaUrl: null,
		captcha:'',
	},
	request: {
		status: statuses.INIT,
		errorMessage: null,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_USERNAME_TEXT: {
			return {
				...state,
				form: {
					...state.form,
					email:
						action.payload !== null
							? state.form.email + action.payload
							: state.form.email.substr(0, state.form.email.length - 1),
				},
			};
		}
		case ADD_NEW_PASSWORD_TEXT: {
			return {
				...state,
				form: {
					...state.form,
					password:
						action.payload !== null
							? state.form.password + action.payload
							: state.form.password.substr(0, state.form.password.length - 1),
				},
			};
		}
		case ADD_NEW_CAPTCHA_TEXT: {
			return {
				...state,
				form: {
					...state.form,
					captcha:
						action.payload !== null
							? state.form.captcha + action.payload
							: state.form.captcha.substr(0, state.form.captcha.length - 1),
				},
			};
		}
		case CHANGE_REMEMBER: {
			return {
				...state,
				form: {
					...state.form,
					rememberMe: !state.form.rememberMe,
				},
			};
		}
		case LOGIN_REQUEST: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.REQUEST,
					errorMessage: null,
				},
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.SUCCESS,
				},
			};
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.FAILURE,
					errorMessage: action.payload,
				},
			};
		}
		case LOGIN_ERROR: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.ERROR,
					errorMessage: action.payload,
				},
			};
		}

		case CAPTCHA_REQUEST: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.REQUEST,
					errorMessage: null,
				},
			};
		}

		case CAPTCHA_FAILURE: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.ERROR,
					errorMessage: action.payload,
				},
			};
		}

		case CAPTCHA_SUCCESS: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.SUCCESS,
				},
				form: {
					...state.form,
					captchaRequired: true,
					capthaUrl: action.payload,
				},
			};
		}

		default:
			return state;
	}
};
