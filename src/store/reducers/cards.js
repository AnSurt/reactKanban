import {
  GET_CARDS,
  ADD_CARDS,
  UPDATE_CARDS,
  DELETE_CARDS,
  successAction,
  failureAction
} from "../types";
const initialState = {
  data: []
};

export default function Cards(state = initialState, action) {
  switch (action.type) {
    case successAction(DELETE_CARDS):
      console.log(action);
      return {
        ...state,
        data: [state.data.filter(card => card.id === action.id), action.data]
      };
    case successAction(GET_CARDS):
      return {
        data: action.data
      };
    case failureAction(GET_CARDS):
      return {
        ...state,
        error: action.error
      };
    case UPDATE_CARDS:
      return {
        data: action.data
      };

    case successAction(ADD_CARDS):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };

    default:
      return state;
  }
}
//
