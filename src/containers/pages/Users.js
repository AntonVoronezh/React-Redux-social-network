import React from 'react';
import { connect } from 'react-redux';
import UsersPage from '../../components/pages/Users/Users';
import { fetchUsers, followUserById, unFollowUserById, setPageNumberAC } from '../../store/actions/users';

class Users extends React.Component {




}



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
