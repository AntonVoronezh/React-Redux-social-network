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
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.payload) {
						return {
							...u,
							followed: true,
						};
					}
					return u;
				}),
			};











		default:
			return state;
	}
};

export default reducer;
