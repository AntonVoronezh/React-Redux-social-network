import React from "react";
import { connect } from "react-redux";

import UsersPage from "../../components/pages/Users/Users";
import {
  fetchUsers,
  followUserById,
  unFollowUserById,
  setPageNumberAC,
} from "../../store/actions/users";
import {AppStateType} from "../../store/reducers/root";

type StatePropsType = {
  count: number;
  totalCount: number;
  page: number;
  status: string;
  isLoading: boolean;
  users: any[];
  error: { message: string };
  paginationCount: number;
}

type DispatchPropsType = {
  fetchUsersCB: (num?: number, count?: number) => void;
  followCB: () => any;
  unfollowCB: () => any;
  setPageNumberCB: (num: number) => any;
  paginationHandlerCB: (num: number) => any;
}

type OwnPropsType = {
  as?: string;
}

type PropsType = StatePropsType & DispatchPropsType & OwnPropsType;

class Users extends React.Component<PropsType> {
  componentDidMount(): void {
    this.props.fetchUsersCB();
  }

  paginationHandler = (number = this.props.page): void => {
    this.props.fetchUsersCB(number, this.props.count);
  };

  render(): React.ReactElement {
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

const mapStateToProps = ({ users }: AppStateType): any => {
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
