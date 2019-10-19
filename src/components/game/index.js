import React from "react";
import Canvas from "../canvas";
import { useController } from "../../hooks/useController";

export default () => {
  useController();
  return <Canvas />;
};
