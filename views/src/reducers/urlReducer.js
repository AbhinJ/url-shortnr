import { URL_REDUCER } from "../actions/types";
export default function(state = null, action) {
  switch (action.type) {
    case URL_REDUCER:
      return action.payload || false;
    default:
      return state;
  }
}
