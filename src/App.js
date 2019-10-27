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
    xVel: 0,
    yVel: 0,
    keyStream: new Set(),
    ctx: null,
    spaceShip: null,
    // Getters are transformed to @computed values
    get shipAX() {
      return this.keyStream.has(39) || this.keyStream.has(37) ? 0.7 : 0;
    },
    get shipAY() {
      return this.keyStream.has(38) || this.keyStream.has(40) ? 0.7 : 0;
    },
    get isMoving() {
      return this.keyStream.size > 0 ? true : false;
    },
    setSpaceShip(ship) {
      this.spaceShip = ship;
    },
    setCTX(context) {
      this.ctx = context;
    },
    addKeyToStream(key) {
      this.keyStream.add(key);
    },
    removekeyFromStream(key) {
      this.keyStream.delete(key);
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
