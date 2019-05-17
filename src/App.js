import React from 'react';
import classes from './App.module.css';
import { Container, Menu, Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/pages/Main';
import Profile from './containers/pages/Profile';
import Dialogs from './containers/pages/Dialogs';
import Users from './containers/pages/Users';
import Login from './containers/pages/Login';
import NotFound from './components/pages/NotFound/NotFound';
import LeftMenu from './components/elements/LeftMenu/LeftMenu';

const App = () => {
	return (
		<div className={classes.App}>
			<Container className={classes.container}>
				<header className={classes.header}>
					<Menu>
						<Menu.Item>Social Network</Menu.Item>
					</Menu>
				</header>
				<div className={classes.mainContent}>
					<aside className={classes.aside}>
						<Segment className={classes.segment}>
							<LeftMenu />
						</Segment>
					</aside>
					<main className={classes.main}>
						<Segment className={classes.segment}>
							<Switch>
								<Route exact path="/" component={Main} />
								<Route path="/profile" component={Profile} />
								<Route path="/dialogs" component={Dialogs} />
								<Route path="/dialogs/:user" component={Dialogs} />
								<Route path="/users" component={Users} />
								<Route path="/login" component={Login} />
								<Route component={NotFound} />
							</Switch>
						</Segment>
					</main>
				</div>
				<footer>
					<Menu>
						<Menu.Item>2019</Menu.Item>
					</Menu>
				</footer>
			</Container>
		</div>
	);
};

export default App;
