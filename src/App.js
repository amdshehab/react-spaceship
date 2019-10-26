import React from "react";
import Game from "./components/game";
import "./App.css";
import { useLocalStore } from "mobx-react";
import { StoreContext } from "./context/store";

function App() {
  const store = useLocalStore(() => ({
    animationId: null,
    x: 230,
    y: 300,
    keyStream: new Set(),
    ctx: null,
    spaceShip: null,
    get isMoving() {
      return this.keyStream.size > 0 ? true : false;
    },
    setSpaceShip(ship) {
      this.spaceShip = ship;
    },
    setAnimation(id) {
      this.animationId = id;
    },
    setCTX(context) {
      this.ctx = context;
    },
    setX(x) {
      this.x = x;
    },
    setY(y) {
      this.y = y;
    },
    addKeyToStream(key) {
      this.keyStream.add(key);
    },
    removekeyFromStream(key) {
      this.keyStream.delete(key);
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
