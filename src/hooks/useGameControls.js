import { useState, useEffect, useCallback } from "react";

export const useGameControls = (onMove) => {
  const [activeDirection, setActiveDirection] = useState(null);

  const handleKeyPress = useCallback(
    (event) => {
      const directions = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
        KeyW: "up",
        KeyS: "down",
        KeyA: "left",
        KeyD: "right",
      };

      const direction = directions[event.code];
      if (direction && onMove) {
        setActiveDirection(direction);
        onMove(direction);

        setTimeout(() => setActiveDirection(null), 200);
      }
    },
    [onMove]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleButtonMove = useCallback(
    (direction) => {
      setActiveDirection(direction);
      if (onMove) {
        onMove(direction);
      }
      setTimeout(() => setActiveDirection(null), 200);
    },
    [onMove]
  );

  return {
    activeDirection,
    handleButtonMove,
  };
};
