import { getUsers } from '../../helpers/axios/axios';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';

export const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export const followAC = id => ({ type: FOLLOW, payload: id });
export const unfollowAC = id => ({ type: UNFOLLOW, payload: id });

const getTotalCountAC = num => ({ type: GET_TOTAL_COUNT, payload: num });
export const setPageNumberAC = num => ({ type: SET_PAGE_NUMBER, payload: num });

const usersFailureAC = error => ({ type: USERS_FAILURE, payload: error });
const usersRequestAC = () => ({ type: USERS_REQUEST });
const usersSuccessAC = data => ({ type: USERS_SUCCESS, payload: data });

const fetchUsers = (page, count) => async dispatch => {
	dispatch(usersRequestAC());


};

export default fetchUsers;
