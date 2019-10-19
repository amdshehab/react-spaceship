import { useEffect } from "react";

export const useController = () => {
  const handleInput = e => {
    console.log("fofofofofo", e);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleInput);
    return () => {
      window.removeEventListener("keydown", handleInput);
    };
  }, []);
};
