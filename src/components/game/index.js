import React from "react";
import Canvas from "../canvas";
import { observer } from "mobx-react";
import { useController } from "../../hooks";

export default observer(() => {
  useController();
  return <Canvas />;
});
