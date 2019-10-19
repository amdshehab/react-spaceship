import React, { useRef, useEffect } from "react";
import { useStore } from "../../hooks/useStore";
// import spaceShip from "./space-ship.png";

export default () => {
  const { setCTX } = useStore();

  const canvasRef = useRef(null);

  const canvasHeight = 700,
    canvasWidth = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setCTX(ctx);
  }, []);

  return (
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
  );
};
