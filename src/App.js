import React from "react";
import "./style.css";
import Board from "./components/board";

import "./App.css";

import { Provider } from "react-redux";

import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="flex-conteiner">
        <Board></Board>
      </div>
    </Provider>
  );
}

export default App;
