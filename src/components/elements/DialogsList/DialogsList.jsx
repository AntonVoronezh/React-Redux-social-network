import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = ({ dialogs }) => {


};

export default Dialogs;

Dialogs.propTypes = {
	dialogs: PropTypes.array.isRequired,
};
