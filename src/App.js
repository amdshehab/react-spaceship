import React from "react";
import Game from "./components/game";
import "./App.css";
import Store from "./store";

function App() {
  return (
    <div className="App">
      <Game store={Store} />
    </div>
  );
}

export default App;
