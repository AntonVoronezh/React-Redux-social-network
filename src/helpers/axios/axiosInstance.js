import axios from 'axios';

export default axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	withCredentials: true,
	headers: {
        'API-KEY': '34c7e359-667f-4cc2-ba50-a70b94f3e06e'
    }

});
