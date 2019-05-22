import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import classes from './Dialogs.module.css';
import DialogsList from '../../elements/DialogsList/DialogsList';
import Messages from '../../elements/Messages/Messages';
import UsersMessagesForm from '../../elements/forms/UsersMessagesForm/UsersMessagesForm';

const Dialogs = props => {
	return (
		<React.Fragment>
			<div className={classes.dialogs}>
				<Segment className={classes.users}>
					<DialogsList {...props} />
				</Segment>
				<Segment className={classes.messages}>
					<Messages {...props} />
					{props.location.pathname === '/dialogs' ? null : <UsersMessagesForm {...props} />}
				</Segment>
			</div>
		</React.Fragment>
	);
};

export default Dialogs;

Dialogs.propTypes = {
	newDialogText: PropTypes.string.isRequired,
	messages: PropTypes.object.isRequired,
	dialogs: PropTypes.array.isRequired,
	addDialogCB: PropTypes.func.isRequired,
	addNewDialogTextCB: PropTypes.func.isRequired,
};
