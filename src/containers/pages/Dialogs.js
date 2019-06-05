import React from 'react';
import Dialogs from '../../components/pages/Dialogs/Dialogs';
import { connect } from 'react-redux';
import { addDialogAC, addNewDialogTextAC } from '../../store/actions/dialogs';

// const get

const mapStateToProps = ({ dialogs }) => {
	return {
		...dialogs,
	};
};



