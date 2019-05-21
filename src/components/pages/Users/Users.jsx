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

	const paginationChangeHandler = ({ currentTarget }) => {
		const number = Number(currentTarget.childNodes[0].data);

		setPageNumberCB(number);
		paginationHandlerCB(number);
	};

	!error
		? (users = data.map(u => {
				return <User key={u.id} {...u} followCB={followCB} unfollowCB={unfollowCB} />;
		  }))
		: (users = `Ошибка "${error.message}". Попробуйте еще раз.`);

	isLoading
		? (result = (
				<Loader size="large" active>
					Loading
				</Loader>
		  ))
		: (result = users);

	isLoading
		? (pagination = null)
		: (pagination = (
				<Pagination
					defaultActivePage={page}
					totalPages={paginationCount}
					onPageChange={data => paginationChangeHandler(data)}
					firstItem={null}
					lastItem={null}
					prevItem={null}
					nextItem={null}
				/>
		  ));

	return (
		<React.Fragment>
			{pagination}
			{result}
		</React.Fragment>
	);
};

export default Users;

Users.propTypes = {
	followCB: PropTypes.func.isRequired,
	unfollowCB: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	users: PropTypes.array.isRequired,
	error: PropTypes.string,
	paginationCount: PropTypes.number.isRequired,
	setPageNumberCB: PropTypes.func.isRequired,
};
