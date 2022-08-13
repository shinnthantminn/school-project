import { PostStart, PostFail, addPost, getAllPost } from "../Type.js";
const initialState = {
  loading: false,
  post: null,
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostStart:
      return {
        ...state,
        loading: true,
      };
    case addPost:
      return {
        ...state,
        loading: false,
      };
    case getAllPost:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case PostFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
