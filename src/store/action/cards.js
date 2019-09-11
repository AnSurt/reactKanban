import {
  GET_COLUMNS,
  GET_CARDS,
  ADD_CARDS,
  UPDATE_CARDS,
  DELETE_CARDS,
  successAction,
  failureAction
} from "../types";
export function loadCards() {
  return dispatch =>
    fetch("http://localhost:8089/api/card") // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(GET_CARDS), data }))
      .catch(err => dispatch({ type: failureAction(GET_CARDS), err }));
}
export function loadColumns() {
  return dispatch =>
    fetch("http://localhost:8089/api/column") // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(GET_COLUMNS), data }))
      .catch(err => dispatch({ type: failureAction(GET_COLUMNS), err }));
}
export function postCards(card) {
  return dispatch =>
    fetch("http://localhost:8089/api/card", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }) // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(ADD_CARDS), data }))
      .catch(err => dispatch({ type: failureAction(ADD_CARDS), err }));
}
export function putCards(card) {
  return dispatch =>
    fetch("http://localhost:8089/api/card" + card.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }) // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(UPDATE_CARDS), data }))
      .catch(err => dispatch({ type: failureAction(UPDATE_CARDS), err }));
}
export function deleteCards(id) {
  return dispatch =>
    fetch("http://localhost:8089/api/card/" + id, {
      method: "DELETE"
    }).then(
      fetch("http://localhost:8089/api/card") // Redux Thunk handles these
        .then(res => res.json())
        .then(data => dispatch({ type: successAction(DELETE_CARDS), data }))
        .catch(err => dispatch({ type: failureAction(DELETE_CARDS), err }))
    );
  // Redux Thunk handles these
  // .then(res => res.json())
  // .then(data => dispatch({ type: successAction(DELETE_CARDS), data }))
  // .catch(err => dispatch({ type: failureAction(DELETE_CARDS), err }));
}
