import React from "react";
import Game from "./components/game";
import "./App.css";
import { useLocalStore } from "mobx-react";
import { StoreContext } from "./context/store";

function App() {
  const store = useLocalStore(() => ({
    x: 0,
    y: 0,
    ctx: null,
    setCTX(context) {
      this.ctx = context;
    },

    incrementPosition(arg) {
      if (arg === "vertical") this.y++;
      if (arg === "horizontal") this.x++;
    }
  }));
  return (
    <div className="App">
      <StoreContext.Provider value={store}>
        <Game />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
