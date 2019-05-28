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
