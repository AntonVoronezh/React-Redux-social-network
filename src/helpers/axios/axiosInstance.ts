import axios from 'axios';

export default axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	withCredentials: true,
	headers: {
        'API-KEY': '28e60031-0499-46c5-9091-d536f6fd342c'
    }

});
