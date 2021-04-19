import React from "react";
import Login from "../../components/pages/Login/Login";
import { connect } from "react-redux";

import {
  addNewPasswordTextAC,
  addNewUsernameTextAC,
  changeRememberAC,
  login,
  addNewCaptchaTextAC,
} from "../../store/actions/login";
import { AppStateType } from "../../store/reducers/root";

const mapStateToProps = ({ login, auth }: AppStateType): any => {
  return {
    ...login.form,
    ...login.request,
    isAuth: auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    addNewUsernameTextCB: (text: string) =>
      dispatch(addNewUsernameTextAC(text)),
    addNewPasswordTextCB: (text: string) =>
      dispatch(addNewPasswordTextAC(text)),
    addNewCaptchaTextCB: (text: string) => dispatch(addNewCaptchaTextAC(text)),
    changeRememberCB: () => dispatch(changeRememberAC()),
    loginCB: () => dispatch(login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
