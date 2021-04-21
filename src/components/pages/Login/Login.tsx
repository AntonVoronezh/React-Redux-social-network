import React from "react";
import { Button, Form, Segment, Checkbox } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import statuses from "../../../helpers/axios/constants";

type PropsType = {
  addNewUsernameTextCB: (a: any) => void;
  email: string;
  addNewPasswordTextCB: (a: any) => void;
  password: string;
  changeRememberCB: () => void;
  rememberMe: boolean;
  loginCB: () => void;
  errorMessage: string;
  status: string;
  isAuth: boolean;
  captchaRequired: boolean;
  capthaUrl: string;
  captcha: string;
  addNewCaptchaTextCB: (a: any) => void;
};

const Login: React.FC<PropsType> = ({
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
  const usernameInputHandler = ({ nativeEvent: { data } }: any): void => {
    addNewUsernameTextCB(data);
  };
  const passwordInputHandler = ({ nativeEvent: { data } }: any): void => {
    addNewPasswordTextCB(data);
  };
  const captchaInputHandler = ({ nativeEvent: { data } }: any): void => {
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
          style={{ marginBottom: "10px" }}
          control={rememberMe.toString()}
        />
        <br />
        {captchaRequired && (
          <div>
            <img src={capthaUrl} alt="captca" />
          </div>
        )}
        <Button
          type="submit"
          disabled={!(!!email && !!password) || status === statuses.REQUEST}
        >
          Submit
        </Button>
      </Form>
      {status === statuses.ERROR && <div>{errorMessage}</div>}
    </Segment>
  );
};

export default Login;
