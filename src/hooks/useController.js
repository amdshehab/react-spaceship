import { useEffect } from "react";
import { useStore } from "./useStore";

export const useController = () => {
  const localStore = useStore();
  const validKeyCodes = new Set([37, 38, 39, 40]);
  const handleKeyDown = e => {
    if (validKeyCodes.has(e.keyCode)) {
      console.log(e);
      localStore.setController(e.code, true);
    }
  };

  const handleKeyUp = e => {
    if (validKeyCodes.has(e.keyCode)) {
      localStore.setController(e.code, false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
};
