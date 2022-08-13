import { fetch } from "../ApiCall.js";

const setHeader = (token) => {
  if (token) {
    fetch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete fetch.defaults.headers.common["Authorization"];
  }
};

export default setHeader;
