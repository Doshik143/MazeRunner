import Button from "../../UI/Button/Button";
import {
  ControlsContainer,
  ControlsTitle,
  ControlsGrid,
  ControlsHint,
} from "./GameControls.styles";

const GameControls = ({ onMove, activeDirection }) => {
  const directions = [
    { key: "up", label: "↑", code: "ArrowUp" },
    { key: "left", label: "←", code: "ArrowLeft" },
    { key: "down", label: "↓", code: "ArrowDown" },
    { key: "right", label: "→", code: "ArrowRight" },
  ];

  return (
    <ControlsContainer>
      <ControlsTitle>Керування:</ControlsTitle>
      <ControlsGrid>
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
      </ControlsGrid>
      <ControlsHint>Або використовуй клавіші стрілок / WASD</ControlsHint>
    </ControlsContainer>
  );
};

export default GameControls;
