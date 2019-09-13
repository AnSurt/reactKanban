import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./style.css";
import Board from "./components/board/board";

import "./App.css";

import { Provider } from "react-redux";

import store from "./store";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <div className="flex-conteiner">
          <Board></Board>
        </div>
      </Provider>
    </DndProvider>
  );
}

export default App;
//
