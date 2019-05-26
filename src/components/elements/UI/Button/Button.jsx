import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const ButtonMy = ({ content, callback, ...rest }) => {
	const buttonHandler = () => {
		callback(rest.id);
	};

};

export default ButtonMy;

