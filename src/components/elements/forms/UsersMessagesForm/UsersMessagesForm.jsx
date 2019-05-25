import React from 'react';
import PropTypes from 'prop-types';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';

const UsersMessagesForm = ({ newDialogText, addDialogCB, addNewDialogTextCB, location: { pathname } , ...rest}) => {
    const id = Number(pathname.split('/')[2]);
    
    return (
		<React.Fragment>
			<Textarea newMessageText={newDialogText} addNewMessageCB={addNewDialogTextCB} />
			<Button content="Добавить" callback={addDialogCB} id={id}/>
		</React.Fragment>
	);
};

export default UsersMessagesForm;

