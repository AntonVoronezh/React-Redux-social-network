import { getProfile } from "../../helpers/axios/axios";
import { CAPTCHA_FAILURE } from "./login";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../reducers/root";
import {
  MeFailureActionType,
  MeRequestActionType,
  MeSuccessActionType,
} from "./auth";

export const ADD_POST = "ADD_POST";
export const ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT";

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

export type AddPostActionType = {
  type: typeof ADD_POST;
};

export type AddNewMessageActionType = {
  type: typeof ADD_NEW_MESSAGE_TEXT;
  payload: string;
};

export const addPostAC = (): AddPostActionType => ({ type: ADD_POST });
export const addNewMessageAC = (text: string): AddNewMessageActionType => ({
  type: ADD_NEW_MESSAGE_TEXT,
  payload: text,
});

export type ProfileFailureActionType = {
  type: typeof PROFILE_FAILURE;
  payload: string;
};

export type ProfileRequestType = {
  type: typeof PROFILE_REQUEST;
};

export type ProfileSuccessActionType = {
  type: typeof PROFILE_SUCCESS;
  payload: string;
};

const profileFailureAC = (error: string): ProfileFailureActionType => ({
  type: PROFILE_FAILURE,
  payload: error,
});
const profileRequestAC = (): ProfileRequestType => ({ type: PROFILE_REQUEST });
const profileSuccessAC = (data: any): ProfileSuccessActionType => ({
  type: PROFILE_SUCCESS,
  payload: data,
});

const fetchProfile = (
  id: number
): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ProfileSuccessActionType | ProfileFailureActionType | ProfileRequestType
> => async (dispatch) => {
  dispatch(profileRequestAC());

  try {
    const data = await getProfile(id);
    dispatch(profileSuccessAC(data));
  } catch (err) {
    dispatch(profileFailureAC(err));
  }
};

export default fetchProfile;
