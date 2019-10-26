import { useEffect } from "react";
import { useStore } from "./useStore";

export const useController = () => {
  const localStore = useStore();
  const validKeyCodes = new Set([37, 38, 39, 40]);
  const handleKeyDown = e => {
    if (validKeyCodes.has(e.keyCode)) {
      localStore.addKeyToStream(e.keyCode);
    }
  };

  const handleKeyUp = e => {
    if (validKeyCodes.has(e.keyCode)) {
      localStore.removekeyFromStream(e.keyCode);
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
