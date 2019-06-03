import { getUsers, makeFollow, makeUnfollow } from '../../helpers/axios/axios';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

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

const followFailureAC = error => ({ type: FOLLOW_FAILURE, payload: error });
const followRequestAC = () => ({ type: FOLLOW_REQUEST });
const followSuccessAC = () => ({ type: FOLLOW_SUCCESS });

const unfollowRequestAC = () => ({ type: UNFOLLOW_REQUEST });
const unfollowSuccessAC = () => ({ type: UNFOLLOW_SUCCESS });
const unfollowFailureAC = error => ({ type: UNFOLLOW_FAILURE, payload: error });

const fetchUsers = (page, count) => async dispatch => {
	dispatch(usersRequestAC());

	try {
		const responce = await getUsers(page, count);
		dispatch(usersSuccessAC(responce.data.items));
		dispatch(getTotalCountAC(responce.data.totalCount));
	} catch (err) {
		dispatch(usersFailureAC(err));
	}
};

const followUserById = id => async dispatch => {
	dispatch(followRequestAC());

	try {
		const responce = await makeFollow(id);
		if (responce.data.resultCode === 0) {
			dispatch(followSuccessAC());
			dispatch(followAC(id));
		}
	} catch (err) {
		dispatch(followFailureAC(err));
	}
};

const unFollowUserById = id => async dispatch => {
	dispatch(unfollowRequestAC());

	try {
		const responce = await makeUnfollow(id);
		if (responce.data.resultCode === 0) {
			dispatch(unfollowSuccessAC());
			dispatch(unfollowAC(id));
		}
	} catch (err) {
		dispatch(unfollowFailureAC(err));
	}
};

export { fetchUsers, followUserById, unFollowUserById };
