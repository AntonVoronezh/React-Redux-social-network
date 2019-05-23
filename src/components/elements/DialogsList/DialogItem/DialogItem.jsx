import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const DialogItem = ({ id, name }) => {
	return (
		<List.Item>
			<List.Icon name="github" size="large" verticalAlign="middle" />
			<List.Content>
				<List.Header >{name}</List.Header>
				<List.Description >Updated 10 mins ago</List.Description>
			</List.Content>
		</List.Item>
	);
};

export default DialogItem;

DialogItem.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
