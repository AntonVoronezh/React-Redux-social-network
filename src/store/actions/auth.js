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

export const logoutRequestAC = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccessAC = () => ({ type: LOGOUT_SUCCESS });
export const logoutFailureAC = error => ({ type: LOGOUT_FAILURE, payload: error });

export const me = () => async dispatch => {
	dispatch(meRequestAC());

	try {
		const responce = await getMe();

		if (responce.data.resultCode === 0) {
			dispatch(meSuccessAC(responce.data.data.id, responce.data.data.login));
		}
	} catch (err) {
		dispatch(meFailureAC(err));
	}
};

export const logout = () => async dispatch => {
	dispatch(logoutRequestAC());


};
