import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment, Checkbox } from 'semantic-ui-react';
import statuses from '../../../helpers/axios/constants';

const Login = ({
	addNewUsernameTextCB,
	username,
	addNewPasswordTextCB,
	password,
	changeRememberCB,
	remember,
	// validationFormCB,
	loginCB,
	errorMessage,
	status
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
		loginCB(username, password, remember);
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
			{status === statuses.ERROR && <div>{errorMessage}</div>}
		</Segment>
	);
};

export default Login;

Login.propTypes = {
	addNewUsernameTextCB: PropTypes.func.isRequired,
	addNewPasswordTextCB: PropTypes.func.isRequired,
	changeRememberCB: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	remember: PropTypes.bool.isRequired,
	loginCB: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
	errorMessage: PropTypes.string,
	// validationFormCB: PropTypes.func.isRequired,
};
