import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfilePage from '../../components/pages/Profile/Profile';
import fetchProfile, { addNewMessageAC, addPostAC } from '../../store/actions/profile';

class Profile extends React.Component {
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

const mapStateToProps = ({ profile }) => {
	return {
		...profile,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addPostCB: () => dispatch(addPostAC()),
		addNewMessageCB: text => dispatch(addNewMessageAC(text)),
		fetchProfileCB: id => dispatch(fetchProfile(id)),
	};
};


