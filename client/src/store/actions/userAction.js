import {
  registerComplete,
  Start,
  Fail,
  LoginComplete,
  emailVerify,
  changePassword,
  Logout,
  innerPasswordChange,
  EditProfile,
  AUTHFail,
} from "../Type.js";
import { fetch } from "../../ApiCall.js";
import { toast } from "react-toastify";

export const register = async (dispatch, value) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch.post("/user/register", { ...value });
    dispatch({
      type: registerComplete,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: Fail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const LoginAction = async (dispatch, value) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch.post("/user", { ...value });
    localStorage.setItem("token", res.data.result.token);
    dispatch({
      type: LoginComplete,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    localStorage.removeItem("token");
    toast.error(e.response.data.msg);
    dispatch({
      type: Fail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const authorization = async (dispatch) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch.get("/user/auth");
    dispatch({
      type: LoginComplete,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    localStorage.removeItem("token");
    dispatch({
      type: AUTHFail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const emailVerifying = async (dispatch, email) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch.post("/user/verify", { ...email });
    localStorage.setItem("token", res.data.result.token);
    dispatch({
      type: emailVerify,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    dispatch({
      type: Fail,
      payload: e.response.data.msg,
    });
    toast.error(e.response.data.msg);
    return e.response.data.con;
  }
};

export const emailAuthorization = async (dispatch) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch("/user/password/token");
    dispatch({
      type: emailVerify,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    dispatch({
      type: Fail,
      payload: e.response.data.msg,
    });
    toast.error(e.response.data.msg);
    return e.response.data.con;
  }
};

export const passwordChange = async (dispatch, payload) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch.patch("/user/password&change", { ...payload });
    dispatch({
      type: changePassword,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: Fail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const LogoutAction = async (dispatch) => {
  dispatch({
    type: Start,
  });

  localStorage.removeItem("token");
  dispatch({
    type: Logout,
  });
  return true;
};

export const innerChangePassword = async (dispatch, payload) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch.patch("/user/inner/change/password", {
      ...payload,
    });
    dispatch({
      type: innerPasswordChange,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: Fail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};

export const editProfile = async (dispatch, payload) => {
  dispatch({
    type: Start,
  });
  try {
    const res = await fetch.patch("/user/edit/profile", payload);
    dispatch({
      type: EditProfile,
      payload: res.data.result,
    });
    return res.data.con;
  } catch (e) {
    toast.error(e.response.data.msg);
    dispatch({
      type: Fail,
      payload: e.response.data.msg,
    });
    return e.response.data.con;
  }
};
