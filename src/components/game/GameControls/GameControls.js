import React from "react";
import Button from "../../UI/Button/Button";
import "./GameControls.css";

const GameControls = ({ onMove, activeDirection }) => {
  const directions = [
    { key: "up", label: "↑", code: "ArrowUp" },
    { key: "left", label: "←", code: "ArrowLeft" },
    { key: "down", label: "↓", code: "ArrowDown" },
    { key: "right", label: "→", code: "ArrowRight" },
  ];

  return (
    <div className="game-controls">
      <h3>Керування:</h3>
      <div className="game-controls__grid">
        {directions.map((direction) => (
          <Button
            key={direction.key}
            variant={
              activeDirection === direction.key ? "primary" : "secondary"
            }
            onClick={() => onMove(direction.key)}
            className="game-controls__button"
          >
            {direction.label}
          </Button>
        ))}
      </div>
      <p className="game-controls__hint">
        Або використовуй клавіші стрілок / WASD
      </p>
    </div>
  );
};

export default GameControls;
