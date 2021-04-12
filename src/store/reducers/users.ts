import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
  FOLLOW,
  UNFOLLOW,
  SET_PAGE_NUMBER,
  GET_TOTAL_COUNT,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  FollowType,
  UnfollowType,
  GetTotalCountType,
  SetPageNumberType,
  UsersFailureType,
  UsersRequestType,
  UsersSuccessType,
  FollowFailureType,
  FollowRequestType,
  FollowSuccessType,
  UnFollowFailureType,
  UnFollowRequestType,
  UnFollowSuccessType,
} from "../actions/users";
import statuses from "../../helpers/axios/constants";

type ActionsTypes =
  | FollowType
  | UnfollowType
  | GetTotalCountType
  | SetPageNumberType
  | UsersFailureType
  | FollowSuccessType
  | UsersRequestType
  | UsersSuccessType
  | FollowRequestType
  | FollowFailureType
  | UnFollowFailureType
  | UnFollowRequestType
  | UnFollowSuccessType;

type InitialStateType = {
  users: any[];
  isLoading: boolean;
  error: null | string;
  totalCount: number;
  page: number;
  count: number;
  status: string;
};

const initialState: InitialStateType = {
  users: [],
  isLoading: false,
  error: null,
  totalCount: 0,
  page: 1,
  count: 5,
  status: statuses.INIT,
};

const reducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };

    case USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case USERS_SUCCESS:
      return {
        ...state,
      // @ts-ignore
        users: [...action.payload],
        isLoading: false,
        error: null,
      };

    case USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case SET_PAGE_NUMBER:
      return {
        ...state,
        page: action.payload,
      };

    case GET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };

    case FOLLOW_REQUEST:
      return {
        ...state,
        status: statuses.REQUEST,
        error: null,
      };

    case FOLLOW_SUCCESS:
      return {
        ...state,
        status: statuses.SUCCESS,
        error: null,
      };

    case FOLLOW_FAILURE:
      return {
        ...state,
        status: statuses.FAILURE,
        error: action.payload,
      };
    case UNFOLLOW_REQUEST:
      return {
        ...state,
        status: statuses.REQUEST,
        error: null,
      };

    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        status: statuses.SUCCESS,
        error: null,
      };

    case UNFOLLOW_FAILURE:
      return {
        ...state,
        status: statuses.FAILURE,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
