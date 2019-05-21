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

	const submitFormHandler = () => {
		// validationFormCB();
		loginCB();
	};

	return (
		<Segment>
			<Form onSubmit={submitFormHandler}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Username"
						placeholder="username"
						onChange={usernameInputHandler}
						value={username}
					/>

				</Form.Group>


	
			</Form>
		</Segment>
	);
};

export default Login;

