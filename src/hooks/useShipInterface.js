import { useEffect } from "react";
import { useStore } from "./useStore";
import { autorun } from "mobx";

export const useShipInterface = () => {
  const localStore = useStore();

  const transformFunctions = {
    39: store => {
      store.xVel += store.shipAX;
    },
    37: store => {
      store.xVel -= store.shipAX;
    },
    38: store => {
      store.yVel -= store.shipAY;
    },
    40: store => {
      store.yVel += store.shipAY;
    }
  };

  const animate = timeStamp => {
    let { ctx, spaceShip, keyStream, isMoving } = localStore;

    if (isMoving) {
      ctx.clearRect(0, 0, 500, 700);

      keyStream.forEach(keyCode => {
        transformFunctions[keyCode](localStore);
      });

      // Applying some friction
      localStore.xVel *= 0.86;
      localStore.yVel *= 0.86;

      // Boundry checks
      if (
        localStore.x + localStore.xVel < 450 &&
        localStore.x + localStore.xVel > 0
      ) {
        localStore.x += localStore.xVel;
      }

      if (
        localStore.y + localStore.yVel > 0 &&
        localStore.y + localStore.yVel < 650
      ) {
        localStore.y += localStore.yVel;
      }

      ctx.drawImage(spaceShip, localStore.x, localStore.y, 50, 50);
      requestAnimationFrame(animate);
    }
  };

  // Reactive fn that actions the canvas animation
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
