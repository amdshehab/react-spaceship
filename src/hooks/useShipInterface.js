import { useEffect } from "react";
import { useStore } from "./useStore";
import { autorun } from "mobx";

export const useShipInterface = () => {
  const localStore = useStore();

  const animate = () => {
    const {
      ctx,
      x,
      y,
      setX,
      setY,
      spaceShip,
      keyStream,
      isMoving
    } = localStore;

    if (isMoving) {
      ctx.clearRect(0, 0, 500, 700);
      let modifiedX, modifiedY;

      keyStream.forEach(keyCode => {
        modifiedX = keyCode === 39 ? x + 10 : keyCode === 37 ? x - 10 : x;
        modifiedY = keyCode === 38 ? y - 10 : keyCode === 40 ? y + 10 : y;
      });

      setX(modifiedX);
      setY(modifiedY);
      ctx.drawImage(spaceShip, modifiedX, modifiedY, 50, 50);
      requestAnimationFrame(animate);
    }
  };

  useEffect(
    () =>
      autorun(() => {
        const { isMoving } = localStore;

        if (isMoving) {
          requestAnimationFrame(animate);
        }
      }),
    []
  );
};
