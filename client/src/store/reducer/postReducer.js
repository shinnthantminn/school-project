import {
  PostStart,
  PostFail,
  addPost,
  getAllPost,
  GetParPost,
  DeletePost,
  EditPost,
} from "../Type.js";
const initialState = {
  loading: false,
  post: null,
  perPost: null,
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostStart:
      return {
        ...state,
        loading: true,
      };
    case EditPost:
    case DeletePost:
      return {
        ...state,
        perPost: null,
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
    case GetParPost:
      return {
        ...state,
        loading: false,
        perPost: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
