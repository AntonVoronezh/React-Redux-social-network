import React from 'react';
import Login from '../../components/pages/Login/Login';
import { connect } from 'react-redux';
import { addNewPasswordTextAC, addNewUsernameTextAC, changeRememberAC, login, addNewCaptchaTextAC } from '../../store/actions/login';

const mapStateToProps = ({ login, auth }) => {
	return {
		...login.form,
		...login.request,
		isAuth: auth.isAuth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewUsernameTextCB: text => dispatch(addNewUsernameTextAC(text)),
		addNewPasswordTextCB: text => dispatch(addNewPasswordTextAC(text)),
		addNewCaptchaTextCB: text => dispatch(addNewCaptchaTextAC(text)),
		changeRememberCB: () => dispatch(changeRememberAC()),
		loginCB: () => dispatch(login()),
	};
};


