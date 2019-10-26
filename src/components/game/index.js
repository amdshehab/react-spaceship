import React from "react";
import Canvas from "../canvas";
import { useController } from "../../hooks/useController";
import { useShipInterface } from "../../hooks/useShipInterface";
export default () => {
  useController();
  useShipInterface();
  return <Canvas />;
};
