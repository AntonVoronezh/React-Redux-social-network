import { getProfile } from '../../helpers/axios/axios';
import {CAPTCHA_FAILURE} from "./login";

export const ADD_POST = 'ADD_POST';
export const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';

export type AddPostActionType = {
	type: typeof ADD_POST;
};

export type AddNewMessageActionType = {
	type: typeof ADD_NEW_MESSAGE_TEXT;
	payload: string;
};

export const addPostAC = (): AddPostActionType => ({ type: ADD_POST });
export const addNewMessageAC = (text: string): AddNewMessageActionType => ({ type: ADD_NEW_MESSAGE_TEXT, payload: text });

const profileFailureAC = error => ({ type: PROFILE_FAILURE, payload: error });
const profileRequestAC = () => ({ type: PROFILE_REQUEST });
const profileSuccessAC = data => ({ type: PROFILE_SUCCESS, payload: data });

const fetchProfile = id => async dispatch => {
	dispatch(profileRequestAC());

	try {
		const responce = await getProfile(id);
		dispatch(profileSuccessAC(responce.data));
	} catch (err) {
		dispatch(profileFailureAC(err));
	}
};

export default fetchProfile;
