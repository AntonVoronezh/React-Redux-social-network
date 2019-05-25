import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from 'semantic-ui-react';

const Textarea = ({ newMessageText, addNewMessageCB }) => {
	const textareaHandler = ({ nativeEvent: { data } }) => {
		addNewMessageCB(data);
	};

};

export default Textarea;


