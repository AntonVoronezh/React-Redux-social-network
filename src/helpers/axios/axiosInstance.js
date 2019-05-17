import axios from 'axios';

export default axios.create({
	baseUrl: 'https://social-network.samuraijs.com/api/1.0',
	withCredentials: true,
});
