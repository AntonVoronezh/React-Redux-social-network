import { SET_IS_AUTH } from '../actions/auth';
import { ME_REQUEST, ME_SUCCESS, ME_FAILURE } from '../actions/auth';
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/auth';
import statuses from '../../helpers/axios/constants';

const initialState = {
	isAuth: false,
	userInfo: {
		userId: null,
		userName: null,
	},
	errorMessage: null,
	status: statuses.INIT,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_AUTH: {
			return {
				...state,
				isAuth: action.payload,
			};
		}
		case ME_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
			};
		}




		default:
			return state;
	}
};
