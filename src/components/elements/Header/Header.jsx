import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isAuth, userName, logoutCB }) => {
	const spanLogoutHandler = () => {
		logoutCB();
	};

	const result2 = isAuth ? userName : null;
	const result = isAuth ? <span onClick={spanLogoutHandler}>Log Out</span> : null;


};

export default Header;

