import { combineReducers } from 'redux';
import profile from './profile';
import users from './users';
import dialogs from './dialogs';
import login from './login';

const rootReducer = combineReducers({
	profile,
	users,
	dialogs,
	login
});

export default rootReducer;
