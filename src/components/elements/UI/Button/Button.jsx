import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const ButtonMy = ({ content, callback, ...rest }) => {
	const buttonHandler = () => {
		callback(rest.id);
	};
	return (
		<React.Fragment>
			<Button content={content} onClick={buttonHandler} />
		</React.Fragment>
	);
};

export default ButtonMy;

ButtonMy.propTypes = {
	content: PropTypes.string.isRequired,
	callback: PropTypes.func.isRequired,
};
