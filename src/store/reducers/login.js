import { validationForm } from '../../helpers/forms/validation';
import statuses from '../../helpers/axios/constants';
// import { setInStorage, getInStorage } from '../../helpers/localStorage/localStorage';

import { ADD_NEW_PASSWORD_TEXT, ADD_NEW_USERNAME_TEXT, CHANGE_REMEMBER } from '../actions/login';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, AUTH_ERROR } from '../actions/login';

const initialState = {
	form: {
		username: '',
		password: '',
		remember: false,
	},
	request: {
		status: statuses.INIT,
		errorMessage: null,
		captchaUrl: null,
	},
	// validation: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_USERNAME_TEXT: {
			return {
				...state,
				form: {
					...state.form,
					username:
						action.payload !== null
							? state.form.username + action.payload
							: state.form.username.substr(0, state.form.username.length - 1),
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
		case CHANGE_REMEMBER: {
			return {
				...state,
				form: {
					...state.form,
					remember: !state.form.remember,
				},
			};
		}
		case AUTH_REQUEST: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.REQUEST,
					errorMessage: null
				},
			};
		}
		case AUTH_SUCCESS: {
			return {
				...state,
				request: {
					...state.request,
					status: statuses.SUCCESS,
				},
			};
		}


		// case VALIDATION_FORM: {
		//     let isValid = validationForm(state.username, state.password)

		//     return {
		// 		...state,
		// 		validation: isValid,
		// 	};
		// }

		default:
			return state;
	}
};
