import axios from 'axios';

const url = 'https://social-network.samuraijs.com/api/1.0';

export const getUsers = (page, count) => {
	const api = '/users';
	let payload = '';


	return axios.get(`${url}${api}${payload}`);
};
