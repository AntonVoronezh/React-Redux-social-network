import React from 'react';
import PropTypes from 'prop-types';
import User from '../../elements/User/User';
import { Loader, Pagination, Icon } from 'semantic-ui-react';

const Users = ({
	followCB,
	unfollowCB,
	isLoading,
	users: data,
	error,
	paginationCount,
	page,
	setPageNumberCB,
	paginationHandlerCB,
}) => {
	let users, result, pagination;





	return (
		<React.Fragment>
			{pagination}
			{result}
		</React.Fragment>
	);
};

export default Users;
