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
        data: state.data.filter(card => card.id != action.data)
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
    case successAction(UPDATE_CARDS):
      const newCards = state.data.filter(card => card.id != action.data.id);
      if (Number.isInteger(action.insertAfter)) {
        newCards.splice(
          newCards.findIndex(card => card.id == action.insertAfter),
          0,
          action.data
        );
      } else {
        newCards.push(action.data);
      }
      return {
        data: newCards
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
