import { getMe, logOut } from "../../helpers/axios/axios";
import { UserInfoType } from "../reducers/auth";

export const SET_IS_AUTH = "SET_IS_AUTH";
export const SET_USER = "SET_USER";

export const ME_REQUEST = "ME_REQUEST";
export const ME_SUCCESS = "ME_SUCCESS";
export const ME_FAILURE = "ME_FAILURE";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

export type SetIsAuthActionType = {
  type: typeof SET_IS_AUTH;
  payload: boolean;
};

export type MeRequestActionType = {
  type: typeof ME_REQUEST;
};

export type MeSuccessActionType = {
  type: typeof ME_SUCCESS;
  payload: UserInfoType;
};

export type MeFailureActionType = {
  type: typeof ME_FAILURE;
  payload: string;
};

export type LogoutRequestActionType = {
  type: typeof LOGOUT_REQUEST;
};

export type LogoutSuccessActionType = {
  type: typeof LOGOUT_SUCCESS;
};

export type LogoutFailureActionType = {
  type: typeof LOGOUT_FAILURE;
  payload: string;
};

export const setIsAuthAC = (value: boolean): SetIsAuthActionType => ({
  type: SET_IS_AUTH,
  payload: value,
});

export const meRequestAC = (): MeRequestActionType => ({ type: ME_REQUEST });
export const meSuccessAC = (
  userId: number,
  userName: string
): MeSuccessActionType => ({
  type: ME_SUCCESS,
  payload: { userId, userName },
});
export const meFailureAC = (error: string): MeFailureActionType => ({
  type: ME_FAILURE,
  payload: error,
});

export const logoutRequestAC = (): LogoutRequestActionType => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccessAC = (): LogoutSuccessActionType => ({
  type: LOGOUT_SUCCESS,
});
export const logoutFailureAC = (error: string): LogoutFailureActionType => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const me = () => async (dispatch) => {
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

export const logout = () => async (dispatch) => {
  dispatch(logoutRequestAC());

  try {
    const responce = await logOut();

    if (responce.data.resultCode === 0) {
      dispatch(logoutSuccessAC());
    }
  } catch (err) {
    dispatch(logoutFailureAC(err));
  }
};
