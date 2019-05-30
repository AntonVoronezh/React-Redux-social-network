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
		case ME_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMessage: action.payload,
			};
		}

		case ME_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				userInfo: {
					userId: action.payload.userId,
					userName: action.payload.userName,
				},
			};
		}



		default:
			return state;
	}
};
