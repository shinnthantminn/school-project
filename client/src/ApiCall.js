import axios from "axios";
const localUrl = "http://127.0.0.1:4000/api/v1/";

export const fetch = axios.create({
  baseURL: localUrl,
});
