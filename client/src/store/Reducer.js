import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer.js";
import postReducer from "./reducer/postReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export const stores = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
