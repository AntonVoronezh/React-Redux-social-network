import { SET_IS_AUTH } from "../actions/auth";
import { ME_REQUEST, ME_SUCCESS, ME_FAILURE } from "../actions/auth";
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../actions/auth";
import statuses from "../../helpers/axios/constants";

export type UserInfoType = {
    userId: number | null;
    userName: string | null;
}

export type InitialStateType = {
    isAuth: boolean;
    userInfo: UserInfoType;
    errorMessage: string | null;
    status: string;
}

const initialState: InitialStateType = {
  isAuth: false,
  userInfo: {
    userId: null,
    userName: null,
  },
  errorMessage: null,
  status: statuses.INIT,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case ME_REQUEST: {
      return {
        ...state,
        status: statuses.REQUEST,
      };
    }
    case ME_FAILURE: {
      return {
        ...state,
        status: statuses.FAILURE,
        errorMessage: action.payload,
      };
    }

    case ME_SUCCESS: {
      return {
        ...state,
        status: statuses.SUCCESS,
        userInfo: {
          userId: action.payload.userId,
          userName: action.payload.userName,
        },
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        status: statuses.REQUEST,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        status: statuses.FAILURE,
        errorMessage: action.payload,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        userInfo: {
          userId: null,
          userName: null,
        },
        status: statuses.INIT,
      };
    }

    default:
      return state;
  }
};
