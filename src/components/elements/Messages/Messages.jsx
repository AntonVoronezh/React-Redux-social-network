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

	return (
		<React.Fragment>
			<List divided relaxed>
				{list}
			</List>
		</React.Fragment>
	);
};

export default Messages;

Messages.propTypes = {
	messages: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};
