import { useEffect } from "react";
import { autorun } from "mobx";
import spaceShip from "../components/canvas/space-ship.png";

export const useInitialSetup = store => {
  useEffect(
    () =>
      autorun(() => {
        const img = new Image();
        img.src = spaceShip;
        img.onload = () => {
          store.ctx.drawImage(img, store.x, store.y, 50, 50);
        };
        store.setSpaceShip(img);
      }),
    [] // note empty dependencies
  );
};
