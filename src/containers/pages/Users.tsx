import React from "react";
import { connect } from "react-redux";

import UsersPage from "../../components/pages/Users/Users";
import {
  fetchUsers,
  followUserById,
  unFollowUserById,
  setPageNumberAC,
} from "../../store/actions/users";

type PropsType = {
  count: number;
  totalCount: number;
  fetchUsersCB: (num?: number, count?: number) => void;
  page: number;
  followCB: () => any;
  unfollowCB: () => any;
  isLoading: boolean;
  users: any[];
  error: { message: string };
  paginationCount: number;
  setPageNumberCB: (num: number) => any;
  paginationHandlerCB: (num: number) => any;
  status: string;
};

class Users extends React.Component<PropsType> {
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

const mapStateToProps = ({ users }: any): any => {
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

export default connect(mapStateToProps, {
  fetchUsersCB: fetchUsers,
  followCB: followUserById,
  unfollowCB: unFollowUserById,
  setPageNumberCB: setPageNumberAC,
})(Users);
