import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Message from './Message/Message';

const Messages = ({ location: { pathname }, messages }) => {
	const id = Number(pathname.split('/')[2]);

	let list;


};

export default Messages;

