import {
  PostStart,
  PostFail,
  addPost,
  getAllPost,
  GetParPost,
  DeletePost,
  EditPost,
  addComment,
  dropComment,
} from "../Type.js";
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

export const GetPost = async (dispatch, payload) => {
  dispatch({
    type: PostStart,
  });
  try {
    const res = await fetch.get(
      `http://localhost:4000/api/v1/post/per/${payload}`
    );
    dispatch({
      type: GetParPost,
      payload: res.data.result,
    });
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: PostFail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const dropPost = async (dispatch, payload) => {
  dispatch({
    type: PostStart,
  });
  try {
    const res = await fetch.delete(
      `http://localhost:4000/api/v1/post/drop/${payload}`
    );
    dispatch({
      type: DeletePost,
    });
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

export const editPost = async (dispatch, payload, id) => {
  dispatch({
    type: PostStart,
  });
  try {
    const res = await fetch.patch(
      `http://localhost:4000/api/v1/post/edit/${id}`,
      payload
    );
    dispatch({
      type: EditPost,
    });
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

export const AddComment = async (dispatch, id, payload) => {
  try {
    const res = await fetch.post(
      `http://localhost:4000/api/v1/post/add/comment/${id}`,
      { ...payload }
    );
    dispatch({
      type: addComment,
    });
    return res.data;
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: PostFail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const DeleteComment = async (dispatch, comment_id) => {
  try {
    const res = await fetch.delete(
      `http://localhost:4000/api/v1/post/drop/comment/${comment_id}`
    );
    dispatch({
      type: dropComment,
    });
    console.log(res);
    return res.data.con;
  } catch (e) {
    console.log(e);
    toast.error(e.response.data.msg);
    dispatch({
      type: PostFail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};
