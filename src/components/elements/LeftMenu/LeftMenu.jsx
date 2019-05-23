import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const LeftMenu = props => {
	return (
		<React.Fragment>
			<Menu fluid vertical tabular>
				<Menu.Item activeClassName="active" as={NavLink} exact to="/" content="Главная" />
				<Menu.Item activeClassName="active" as={NavLink} to="/profile" content="Профайл" />
				<Menu.Item activeClassName="active" as={NavLink} to="/dialogs" content="Сообщения" />
				<Menu.Item activeClassName="active" as={NavLink} to="/users" content="Пользователи" />
				<Menu.Item activeClassName="active" as={NavLink} to="/login" content="Логин" />
			</Menu>
		</React.Fragment>
	);
};

export default LeftMenu;


