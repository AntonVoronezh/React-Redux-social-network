import React from 'react';
import { connect } from 'react-redux';
import UsersPage from '../../components/pages/Users/Users';
import { fetchUsers, followUserById, unFollowUserById, setPageNumberAC } from '../../store/actions/users';

class Users extends React.Component {
	componentDidMount() {
		this.props.fetchUsersCB();
	}

	paginationHandler = (number = this.props.page) => {
		this.props.fetchUsersCB(number, this.props.count);
	};

	render() {
		const paginationCount = Math.ceil(this.props.totalCount / this.props.count);

		return (
			<>
				<UsersPage
					{...this.props}
					paginationCount={paginationCount}
					paginationHandlerCB={this.paginationHandler}
				/>
			</>
		);
	}
}

const mapStateToProps = ({ users }) => {
	return {
		...users,
	};
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchUsersCB: (page, count) => dispatch(fetchUsers(page, count)),
// 		followCB: id => dispatch(followAC(id)),
// 		unfollowCB: id => dispatch(unfollowAC(id)),
// 		setPageNumberCB: num => dispatch(setPageNumberAC(num)),
// 	};
// };

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Users);

export default connect(
	mapStateToProps,
	{ fetchUsersCB: fetchUsers, followCB: followUserById, unfollowCB: unFollowUserById, setPageNumberCB: setPageNumberAC }
)(Users);
