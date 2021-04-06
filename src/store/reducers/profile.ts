import {
  ADD_NEW_MESSAGE_TEXT,
  ADD_POST,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
} from "../actions/profile";

type PostMessType = {
  id: number;
  message: string;
  likeCount: number;
};

type InitialStateType = {
  posts: PostMessType[];
  newMessageText: string;
  description: string;
  image: string;
  isLoading: boolean;
  profile: null | any;
  userId: null | number;
  error: null | string;
};

const initialState: InitialStateType = {
  posts: [
    { id: 1, message: "aaaaa aaaaaa", likeCount: 11 },
    { id: 2, message: "bbbbbb bbbbb", likeCount: 16 },
  ],
  newMessageText: "---",
  description: "Life is life in boxing",
  image: "https://www.look.com.ua/large/201606/167653.jpg",
  isLoading: false,
  profile: null,
  userId: null,
  error: null,
};

const profile = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        message: state.newMessageText,
        likeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newMessageText: "",
      };
    }

    case ADD_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText:
          action.payload !== null
            ? state.newMessageText + action.payload
            : state.newMessageText.substr(0, state.newMessageText.length - 1),
      };
    }

    case PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: { ...action.payload },
        isLoading: false,
      };

    case PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        // @ts-ignore
        error: action.payload,
      };

    default:
      return state;
  }
};

export default profile;
