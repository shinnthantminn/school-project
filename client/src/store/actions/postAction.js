import { PostStart, PostFail, addPost, getAllPost } from "../Type.js";
import { toast } from "react-toastify";
import { fetch } from "../../ApiCall.js";

export const PostAdding = async (dispatch, payload) => {
  dispatch({
    type: PostStart,
  });
  try {
    const res = await fetch.post("/post/add", payload);
    dispatch({ type: addPost, payload: res.data.result });
    return res.data.con;
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: PostFail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const GetAllPost = async (dispatch, payload) => {
  dispatch({
    type: PostStart,
  });
  try {
    const res = await fetch.get(`http://localhost:4000/api/v1/post/${payload}`);
    dispatch({ type: getAllPost, payload: res.data.result });
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: PostFail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};
