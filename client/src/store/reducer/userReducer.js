import {
  Start,
  registerComplete,
  Fail,
  LoginComplete,
  authorizationComplete,
  emailVerify,
  changePassword,
  Logout,
  innerPasswordChange,
  EditProfile,
} from "../Type.js";

const initialState = {
  loading: false,
  data: null,
  error: "",
  isAuthorization: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Start:
      return {
        ...state,
        loading: true,
      };
    case emailVerify:
    case registerComplete:
    case changePassword:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LoginComplete:
    case authorizationComplete:
    case innerPasswordChange:
    case EditProfile:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isAuthorization: true,
      };
    case Logout:
      return {
        ...state,
        loading: false,
        isAuthorization: false,
        data: null,
      };
    case Fail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
