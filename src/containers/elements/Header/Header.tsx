import React from "react";
import { connect } from "react-redux";

import { me, logout } from "../../../store/actions/auth";
import HeaderCom from "../../../components/elements/Header/Header";
import { AppStateType } from "../../../store/reducers/root";

type IProps = {
  me: () => void;
  isAuth: boolean;
  userName: string;
  logoutCB: () => void;
};

class Header extends React.Component<IProps> {
  componentDidMount() {
    this.props.me();
  }

  render() {
    return (
      <React.Fragment>
        <HeaderCom {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }: AppStateType): any => {
  return {
    isAuth: auth.isAuth,
    userName: auth.userInfo.userName,
  };
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    me: () => dispatch(me()),
    logoutCB: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
