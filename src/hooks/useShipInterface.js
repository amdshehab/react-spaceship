import { useEffect } from "react";
import { useStore } from "./useStore";
import { autorun } from "mobx";

export const useShipInterface = () => {
  const localStore = useStore();
  const transformFunctions = {
    39: store => {
      store.x += 7;
    },
    37: store => {
      store.x -= 7;
    },
    38: store => {
      store.y -= 7;
    },
    40: store => {
      store.y += 7;
    }
  };
  const animate = () => {
    let { ctx, spaceShip, keyStream, isMoving } = localStore;

    if (isMoving) {
      ctx.clearRect(0, 0, 500, 700);

      keyStream.forEach(keyCode => {
        transformFunctions[keyCode](localStore);
      });

      ctx.drawImage(spaceShip, localStore.x, localStore.y, 50, 50);
      requestAnimationFrame(animate);
    }
  };

  useEffect(
    () =>
      autorun(() => {
        const { isMoving } = localStore;

        if (isMoving) {
          console.log("ONLY 1 OCCURENCE");
          requestAnimationFrame(animate);
        }
      }),
    []
  );
};
