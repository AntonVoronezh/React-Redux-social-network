import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from 'semantic-ui-react';

const Textarea = ({ newMessageText, addNewMessageCB }) => {
	const textareaHandler = ({ nativeEvent: { data } }) => {
		addNewMessageCB(data);
	};
	return (
		<React.Fragment>
			<TextArea rows={3} value={newMessageText} onChange={textareaHandler} style={{ width: '100%' }} />
		</React.Fragment>
	);
};

export default Textarea;

Textarea.propTypes = {
	newMessageText: PropTypes.string.isRequired,
	addNewMessageCB: PropTypes.func.isRequired,
};
