import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isAuth, userName, logoutCB }) => {
	const spanLogoutHandler = () => {
		logoutCB();
	};

	const result2 = isAuth ? userName : null;
	const result = isAuth ? <span onClick={spanLogoutHandler}>Log Out</span> : null;

	return (
		<React.Fragment>
			<span>{result2}</span> &nbsp;&nbsp;
			{result}
		</React.Fragment>
	);
};

export default Header;

Header.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	logoutCB: PropTypes.func.isRequired,
	userName: PropTypes.string,
};
