import {
  successAction,
  failureAction,
  UPDATE_COLUMNS,
  GET_COLUMNS
} from "../types";
const initialState = {
  data: []
};

export default function Columns(state = initialState, action) {
  switch (action.type) {
    case successAction(GET_COLUMNS):
      return {
        data: action.data
      };
    case failureAction(GET_COLUMNS):
      return {
        ...state,
        error: action.error
      };
    case UPDATE_COLUMNS:
      return {
        data: action.data
      };
    default:
      return state;
  }
}
