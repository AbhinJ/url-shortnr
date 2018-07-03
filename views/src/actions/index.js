import axios from "axios";
import { URL_REDUCER } from "./types";
export const fetchURL = url => async dispatch => {
  const res = await axios.post("/api/shorten", { url });
  dispatch({ type: URL_REDUCER, payload: res.data });
};
