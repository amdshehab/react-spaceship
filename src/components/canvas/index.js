import React, { useRef, useEffect } from "react";
import { useStore } from "../../hooks/useStore";
// import spaceShip from "./space-ship.png";
import { useObserver } from "mobx-react"; // 6.x
import { useInitialSetup } from "../../hooks/useInitialSetup";

export default () => {
  const localStore = useStore();

  const canvasRef = useRef(null);

  const canvasHeight = 700,
    canvasWidth = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    localStore.setCTX(ctx);
  }, [localStore.setCTX, localStore]);

  useInitialSetup(localStore);

  return useObserver(() => (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{
          border: "5px solid black"
        }}
      />
    </div>
  ));
};
