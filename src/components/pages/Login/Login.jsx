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
					<Form.Input
						fluid
						label="Password"
						placeholder="password"
						onChange={passwordInputHandler}
						value={password}
					/>
				</Form.Group>

				<Checkbox
					label="Запомнить меня"
					onChange={checkboxInputHandler}
					style={{ marginBottom: '10px' }}
					control={toString(remember)}
				/>
				<br />
				<Button type="submit" disabled={!(!!username && !!password)}>
					Submit
				</Button>
			</Form>
		</Segment>
	);
};

export default Login;

Login.propTypes = {
	addNewUsernameTextCB: PropTypes.func.isRequired,
	addNewPasswordTextCB: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	changeRememberCB: PropTypes.func.isRequired,
	remember: PropTypes.bool.isRequired,
	validationFormCB: PropTypes.func.isRequired,
};
