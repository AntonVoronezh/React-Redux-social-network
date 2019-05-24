import axios from 'axios';
// import url from './axiosInstance';

const url = 'https://social-network.samuraijs.com/api/1.0';

export const getUsers = (page, count) => {
	const api = '/users';
	let payload = '';

	if (page && count) {
		payload = `/?page=${page}&count=${count}`;
	} else if (page && !count) {
		payload = `/?page=${page}`;
	} else if (!page && count) {
		payload = `/?count=${count}`;
	} else {
		payload = '';
	}

	return axios.get(`${url}${api}${payload}`);
};

export const getProfile = id => {
	const api = '/profile/';

	return axios.get(`${url}${api}${id}`);
};
