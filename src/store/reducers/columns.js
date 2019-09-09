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
  // switch (action.type) {
  //   case GET_CARD:
  //     return {
  //       ...state
  //     };
  //   case successAction(GET_COLUMNS):
  //     return {
  //       data: action.payload
  //     };
  //   case failureAction(GET_COLUMNS):
  //     return {
  //       ...state,
  //       error: action.error
  //     };
  //   case UPDATE_COLUMNS:
  //     return {
  //       data: action.payload
  //     };
  //   default:
  //     return state;
  // }
}
