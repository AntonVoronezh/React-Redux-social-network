import { tryLogin, getCaptcha } from "../../helpers/axios/axios";
import { setIsAuthAC } from "./auth";
import { ADD_NEW_DIALOG_TEXT } from "./dialogs";

export const ADD_NEW_USERNAME_TEXT = "ADD_NEW_USERNAME_TEXT";
export const ADD_NEW_PASSWORD_TEXT = "ADD_NEW_PASSWORD_TEXT";

export const ADD_NEW_CAPTCHA_TEXT = "ADD_NEW_CAPTCHA_TEXT";

export const CHANGE_REMEMBER = "CHANGE_REMEMBER";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const CAPTCHA_REQUEST = "CAPTCHA_REQUEST";
export const CAPTCHA_SUCCESS = "CAPTCHA_SUCCESS";
export const CAPTCHA_FAILURE = "CAPTCHA_FAILURE";

export type AddNNewUsernameTextActionType = {
  type: typeof ADD_NEW_USERNAME_TEXT;
  payload: string;
};

export const addNewUsernameTextAC = (
  text: string
): AddNNewUsernameTextActionType => ({
  type: ADD_NEW_USERNAME_TEXT,
  payload: text,
});

export type AddNNewPasswordTextActionType = {
  type: typeof ADD_NEW_PASSWORD_TEXT;
  payload: string;
};

export const addNewPasswordTextAC = (
  text: string
): AddNNewPasswordTextActionType => ({
  type: ADD_NEW_PASSWORD_TEXT,
  payload: text,
});

export type AddNNewCaptchaTextActionType = {
  type: typeof ADD_NEW_CAPTCHA_TEXT;
  payload: string;
};

export const addNewCaptchaTextAC = (
  text: string
): AddNNewCaptchaTextActionType => ({
  type: ADD_NEW_CAPTCHA_TEXT,
  payload: text,
});

export type ChangeRememberActionType = {
  type: typeof CHANGE_REMEMBER;
};

export const changeRememberAC = (): ChangeRememberActionType => ({
  type: CHANGE_REMEMBER,
});

export type LoginRequestActionType = {
  type: typeof LOGIN_REQUEST;
};

export const loginRequestAC = (): LoginRequestActionType => ({
  type: LOGIN_REQUEST,
});

export type LoginSuccessActionType = {
  type: typeof LOGIN_SUCCESS;
};

export const loginSuccessAC = (): LoginSuccessActionType => ({
  type: LOGIN_SUCCESS,
});

export type LoginFailureActionType = {
  type: typeof LOGIN_FAILURE;
  payload: string;
};

export const loginFailureAC = (error: string): LoginFailureActionType => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export type LoginErrorActionType = {
  type: typeof LOGIN_ERROR;
  payload: string;
};

export const loginErrorAC = (error: string): LoginErrorActionType => ({
  type: LOGIN_ERROR,
  payload: error,
});

export type CaptchaRequestActionType = {
  type: typeof CAPTCHA_REQUEST;
};

export const captchaRequestAC = (): CaptchaRequestActionType => ({
  type: CAPTCHA_REQUEST,
});

export type CaptchaSuccessActionType = {
  type: typeof CAPTCHA_SUCCESS;
  payload: string;
};

export const captchaSuccessAC = (url: string): CaptchaSuccessActionType => ({
  type: CAPTCHA_SUCCESS,
  payload: url,
});

export type CaptchaFailureActionType = {
  type: typeof CAPTCHA_FAILURE;
  payload: string;
};

export const captchaFailureAC = (error: string): CaptchaFailureActionType => ({
  type: CAPTCHA_FAILURE,
  payload: error,
});

export const login = () => async (dispatch, getState) => {
  dispatch(loginRequestAC());

  const state = getState().login.form;

  try {
    const responce = await tryLogin(
      state.email,
      state.password,
      state.rememberMe,
      state.captcha
    );

    if (responce.data.resultCode === 0) {
      dispatch(loginSuccessAC(responce.data));
      dispatch(setIsAuthAC(true));
    } else if (responce.data.resultCode === 1) {
      dispatch(loginErrorAC(responce.data.messages[0]));
    } else if (responce.data.resultCode === 10) {
      dispatch(captchaRequestAC());

      try {
        const captchaUrl = await getCaptcha();
        dispatch(captchaSuccessAC(captchaUrl.data.url));
      } catch (err) {
        dispatch(captchaFailureAC(err));
      }
    }
  } catch (err) {
    dispatch(loginFailureAC(err));
  }
};
