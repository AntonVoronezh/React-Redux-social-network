import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment, Checkbox } from 'semantic-ui-react';

const Login = ({
	addNewUsernameTextCB,
	username,
	password,
	addNewPasswordTextCB,
	changeRememberCB,
	remember,
	validationFormCB,
	loginCB
}) => {
	const usernameInputHandler = ({ nativeEvent: { data } }) => {
		addNewUsernameTextCB(data);
	};
	const passwordInputHandler = ({ nativeEvent: { data } }) => {
		addNewPasswordTextCB(data);
	};
	const checkboxInputHandler = () => {
		changeRememberCB();
	};



	);
};

export default Login;

