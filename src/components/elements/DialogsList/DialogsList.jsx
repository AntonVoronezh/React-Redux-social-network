import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = ({ dialogs }) => {
	const list = dialogs.map(d => {
		return (
			<NavLink key={d.id} to={`/dialogs/${d.id}`} activeStyle={{ color: 'red' }}>
				<DialogItem {...d} />
			</NavLink>
		);
	});

};

export default Dialogs;

Dialogs.propTypes = {
	dialogs: PropTypes.array.isRequired,
};
