import axios from './axiosInstance';

export const getUsers = (page, count) => {
	const endPoint = '/users';
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

	return axios.get(`${endPoint}${payload}`);
};

export const getProfile = id => {
	const endPoint = '/profile';

	return axios.get(`${endPoint}/${id}`);
};

export const tryLogin = (email, password, rememberMe) => {
	// const endPoint = '/auth/login';
	// const payload = {email, password, rememberMe};

	// return axios.post(`${endPoint},` + payload);
	return axios.post('/auth/login', {email, password, rememberMe});
};

export const getMe = () => {
	const endPoint = '/auth/me';

	return axios.get(`${endPoint}`);
};

export const logOut = () => {
	const endPoint = '/auth/logout';

	return axios.post(`${endPoint}`);
};

