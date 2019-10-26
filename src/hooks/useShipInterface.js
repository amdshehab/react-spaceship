import { useEffect } from "react";
import { useStore } from "./useStore";
import { autorun } from "mobx";
import ship from "../components/canvas/space-ship.png";

export const useShipInterface = () => {
  const localStore = useStore();

  const animate = () => {
    const { ctx, x, y, setX, setY, spaceShip } = localStore;
    const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } = localStore.controller;
    ctx.clearRect(0, 0, 500, 700);
    const modifiedX = ArrowRight ? x + 2 : ArrowLeft ? x - 2 : x;
    const modifiedY = ArrowUp ? y - 0.1 : ArrowDown ? y + 0.1 : y;
    setX(modifiedX);
    setY(modifiedY);
    ctx.drawImage(spaceShip, modifiedX, modifiedY, 50, 50);

    console.log("ANIMATING", ArrowUp, ArrowDown, ArrowLeft, ArrowRight);

    if (ArrowUp || ArrowDown || ArrowLeft || ArrowRight) {
      requestAnimationFrame(animate);
    }
  };

  useEffect(
    () =>
      autorun(() => {
        console.log("---- Entering Reactive Function -----");

        const {
          ArrowUp,
          ArrowDown,
          ArrowLeft,
          ArrowRight
        } = localStore.controller;

        if (ArrowUp || ArrowDown || ArrowLeft || ArrowRight) {
          requestAnimationFrame(animate);
        } else {
          console.log("---- CANCELLING ANIMATION -----");
        }
      }),
    []
  );
};
