import axios from '../../helpers/axios/axiosInstance';
export const ADD_NEW_USERNAME_TEXT = 'ADD_NEW_USERNAME_TEXT';

export const ADD_NEW_PASSWORD_TEXT = 'ADD_NEW_PASSWORD_TEXT';
export const CHANGE_REMEMBER = 'CHANGE_REMEMBER';
export const VALIDATION_FORM = 'VALIDATION_FORM';


	// dispatch(usersRequestAC());

	// try {
	// 	const responce = await getUsers(page, count);
	// 	dispatch(usersSuccessAC(responce.data.items));
	// 	dispatch(getTotalCountAC(responce.data.totalCount));
	// } catch (err) {
	// 	dispatch(usersFailureAC(err));
	// }
};


// axios.post('/auth/login', {
// 	email: '',
// 	password: '',
// 	rememberMe: '',
// }).then(res => {
//     debugger
// })
