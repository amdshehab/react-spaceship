import React, { useRef, useEffect } from "react";
// import spaceShip from "./space-ship.png";

export default () => {
  const canvasRef = useRef(null);

  const canvasHeight = 700,
    canvasWidth = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // const img = new Image();
    // img.src = spaceShip;
    // img.onload = () => {
    //   ctx.drawImage(img, 230, 600, 60, 60);
    // };
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
