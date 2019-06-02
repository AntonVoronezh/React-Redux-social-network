import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment, Checkbox } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import statuses from '../../../helpers/axios/constants';

const Login = ({
	addNewUsernameTextCB,
	email,
	addNewPasswordTextCB,
	password,
	changeRememberCB,
	rememberMe,
	loginCB,
	errorMessage,
	status,
	isAuth,
	captchaRequired,
	capthaUrl,
	captcha,
	addNewCaptchaTextCB,
}) => {
	const usernameInputHandler = ({ nativeEvent: { data } }) => {
		addNewUsernameTextCB(data);
	};
	const passwordInputHandler = ({ nativeEvent: { data } }) => {
		addNewPasswordTextCB(data);
	};
	const captchaInputHandler = ({ nativeEvent: { data } }) => {
		addNewCaptchaTextCB(data);
	};
	const checkboxInputHandler = () => {
		changeRememberCB();
	};

	const submitFormHandler = () => {
		loginCB();
	};

	if (isAuth) {
		return <Redirect to="/" />;
	}

	return (
		<Segment>
			<Form onSubmit={submitFormHandler}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Username"
						placeholder="username"
						onChange={usernameInputHandler}
						value={email}
					/>
					<Form.Input
						fluid
						label="Password"
						placeholder="password"
						onChange={passwordInputHandler}
						value={password}
					/>
					{captchaRequired && (
						<Form.Input
							fluid
							label="Капча"
							placeholder="captcha"
							onChange={captchaInputHandler}
							value={captcha}
						/>
					)}
				</Form.Group>

				<Checkbox
					label="Запомнить меня"
					onChange={checkboxInputHandler}
					style={{ marginBottom: '10px' }}
					control={toString(rememberMe)}
				/>
				<br />
				{captchaRequired && (
					<div>
						<img src={capthaUrl} alt="captca" />
					</div>
				)}
				<Button type="submit" disabled={!(!!email && !!password) || status === statuses.REQUEST}>
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
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	rememberMe: PropTypes.bool.isRequired,
	loginCB: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
	errorMessage: PropTypes.string,
	isAuth: PropTypes.bool.isRequired,
	captchaRequired: PropTypes.bool.isRequired,
	capthaUrl: PropTypes.string,
	captcha: PropTypes.string.isRequired,
	addNewCaptchaTextCB: PropTypes.func,
};
