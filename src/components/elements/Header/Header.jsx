import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isAuth, userName, logoutCB }) => {
	const spanLogoutHandler = () => {
		logoutCB();
	};



};

export default Header;

