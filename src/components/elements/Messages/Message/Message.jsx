import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const Messages = ({ text }) => {
	return (
		<React.Fragment>
			<List.Item>{text}</List.Item>
		</React.Fragment>
	);
};

export default Messages;

Messages.propTypes = {
	text: PropTypes.string.isRequired,
};
