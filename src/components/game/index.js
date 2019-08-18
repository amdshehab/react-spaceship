import React, { useRef, useEffect, useState } from "react";
import spaceShip from "./space-ship.png";

export default () => {
  const canvasRef = useRef(null);

  const canvasHeight = 700,
    canvasWidth = 500;

  const [shipPosition, setShipPosition] = useState({
    x: 230,
    y: 600
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return function cleanup() {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  // const [keyPressed, setKeyPressed] = useState(0);
  useEffect(function setUpCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = spaceShip;
    img.onload = () => {
      ctx.drawImage(img, 230, 600, 60, 60);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const img = new Image();
    img.src = spaceShip;
    requestAnimationFrame(() =>
      ctx.drawImage(img, shipPosition.x, shipPosition.y, 60, 60)
    );
  }, [shipPosition]);

  const handleKeyPress = key => {
    console.log("ship pos ->", shipPosition);

    switch (key.code) {
      case "ArrowUp":
        setShipPosition(({ x, y }) => ({
          x,
          y: y - 20
        }));
        break;
      case "ArrowDown":
        setShipPosition(({ x, y }) => ({
          x,
          y: y + 20
        }));
        break;
      case "ArrowLeft":
        setShipPosition(({ x, y }) => ({
          x: x + 20,
          y
        }));
        break;
      case "ArrowRight":
        setShipPosition(({ x, y }) => ({
          x: x - 20,
          y
        }));
        break;
      default:
        break;
    }
  };

  // const handleKeyPress = key => {
  //   setKeyPressed(true);
  //   console.log("keypressed ");

  //   setTimeout(() => {
  //     setKeyPressed(false);
  //   }, 5000);

  //   switch (key.code) {
  //     case "ArrowUp":
  //       setShipPosition(({ x, y }) => ({ x, y: y - 0.1 }));
  //       break;
  //     case "ArrowDown":
  //       break;
  //     case "ArrowLeft":
  //       break;
  //     case "ArrowRight":
  //       break;
  //     default:
  //       break;
  //   }
  // };

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

// export default ({ name }) => {
//   const [count, setCounter] = useState(0);

//   useEffect(() => {
//     document.title = "Hello, " + name;
//     console.log("fofo");
//   }, [name]);

//   return (
//     <h1 className="Greeting">
//       Hello, {name}
//       <button onClick={() => setCounter(count + 1)}>Increment</button>
//     </h1>
//   );
// };
