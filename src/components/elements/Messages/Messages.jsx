import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Message from './Message/Message';

const Messages = ({ location: { pathname }, messages }) => {
	const id = Number(pathname.split('/')[2]);

	let list;

	!isNaN(id) ? list = messages[id].map(m => {
		return <Message key={m.id} {...m} />;
	}) : list = 'Выберите с кем переписываться'


};

export default Messages;

