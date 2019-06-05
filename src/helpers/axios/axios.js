import axios from './axiosInstance';

export const getUsers = async (page, count) => {
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

	const responce = await axios.get(`${endPoint}${payload}`);
	return responce.data;
};

export const getProfile = async id => {
	const endPoint = '/profile';

	const responce = await axios.get(`${endPoint}/${id}`);
	return responce.data;
};

export const tryLogin = async (email, password, rememberMe, captcha) => {
	// const endPoint = '/auth/login';
	// const payload = {email, password, rememberMe};

	// return axios.post(`${endPoint},` + payload);
	const responce = await axios.post('/auth/login', { email, password, rememberMe, captcha });
	return responce.data;
};

export const getMe = () => {
	const endPoint = '/auth/me';

	return axios.get(`${endPoint}`);
};

export const logOut = () => {
	const endPoint = '/auth/logout';

	return axios.post(`${endPoint}`);
};

export const getCaptcha = async () => {
	const endPoint = '/security/get-captcha-url';

	const responce = await axios.get(`${endPoint}`);
	return responce.data;
};

export const makeFollow = id => {
	const endPoint = '/follow';

	return axios.post(`${endPoint}/${id}`);
};

export const makeUnfollow = id => {
	const endPoint = '/follow';

	return axios.delete(`${endPoint}/${id}`);
};
