import React from 'react';
import classes from './App.module.css';
import { Container, Menu, Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/pages/Main';
import Profile from './containers/pages/Profile';
import Dialogs from './containers/pages/Dialogs';
import Users from './containers/pages/Users';
import NotFound from './components/pages/NotFound/NotFound';
import LeftMenu from './components/elements/LeftMenu/LeftMenu';

const App = () => {
	return (
		<div className={classes.App}>
			<Container className={classes.container}>

				<div className={classes.mainContent}>


				</div>

			</Container>
		</div>
	);
};

export default App;
