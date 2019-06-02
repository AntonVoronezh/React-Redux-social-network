import React from 'react';
import { connect } from 'react-redux';
import { me, logout } from '../../../store/actions/auth';
import HeaderCom from '../../../components/elements/Header/Header';

class Header extends React.Component {
	componentDidMount() {
		this.props.me();
	}


}




export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
