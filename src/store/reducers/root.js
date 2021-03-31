import { combineReducers } from 'redux';

import profile from './profile';
import users from './users';
import dialogs from './dialogs';
import login from './login';
import auth from './auth';

const rootReducer = combineReducers({
	profile,
	users,
	dialogs,
	login,
	auth
});

export default rootReducer;
