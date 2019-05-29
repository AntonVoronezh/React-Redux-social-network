import {
	USERS_REQUEST,
	USERS_SUCCESS,
	USERS_FAILURE,
	FOLLOW,
	UNFOLLOW,
	SET_PAGE_NUMBER,
	GET_TOTAL_COUNT,
} from '../actions/users';

const initialState = {
	users: [],
	isLoading: false,
	error: null,
	totalCount: 0,
	page: 1,
	count: 5,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {











		default:
			return state;
	}
};

export default reducer;
