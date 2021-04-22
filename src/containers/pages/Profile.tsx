import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ProfilePage from "../../components/pages/Profile/Profile";
import fetchProfile, {
  addNewMessageAC,
  addPostAC,
} from "../../store/actions/profile";
import { AppStateType } from "../../store/reducers/root";

type StatePropsType = {
  isLoading: boolean;
  profile: any;
  error: { message: string; };
  posts: any;
  newMessageText: string;
  description: string;
  image: any;
  match: {
    params: {
      id: number;
    };
  };
};

type DispatchPropsType = {
  fetchProfileCB: (id: number) => void;
  addPostCB: () => void;
  addNewMessageCB: (text: string) => void;
};

type OwnPropsType = {
  as?: string;
};

type PropsType = StatePropsType & DispatchPropsType & OwnPropsType;

class Profile extends React.Component<PropsType> {
  componentDidMount() {
    let iserId = this.props.match.params.id;

    if (!iserId) {
      iserId = 2;
    }

    this.props.fetchProfileCB(iserId);
  }

  render() {
    return (
      <>
        <ProfilePage {...this.props} />
      </>
    );
  }
}

const mapStateToProps = ({ profile }: AppStateType): any => {
  return {
    ...profile,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPostCB: () => dispatch(addPostAC()),
    addNewMessageCB: (text: string) => dispatch(addNewMessageAC(text)),
    fetchProfileCB: (id: number) => dispatch(fetchProfile(id)),
  };
};

export default connect<
  StatePropsType,
  DispatchPropsType,
  OwnPropsType,
  AppStateType
>(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(withRouter(Profile));
