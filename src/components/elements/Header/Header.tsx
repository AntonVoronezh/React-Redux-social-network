import React from "react";

type PropsType = {
  isAuth: boolean;
  userName: string;
  logoutCB: () => void;
};

const Header: React.FC<PropsType> = ({ isAuth, userName, logoutCB }) => {
  const spanLogoutHandler = () => {
    logoutCB();
  };

  const result2 = isAuth ? userName : null;
  const result = isAuth ? (
    <span onClick={spanLogoutHandler}>Log Out</span>
  ) : null;

  return (
    <React.Fragment>
      <span>{result2}</span> &nbsp;&nbsp;
      {result}
    </React.Fragment>
  );
};

export default Header;
