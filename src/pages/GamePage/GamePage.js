import React from "react";
import Header from "../../components/layout/Header/Header";
import MazeGrid from "../../components/game/MazeGrid/MazeGrid";
import GameControls from "../../components/game/GameControls/GameControls";
import Button from "../../components/UI/Button/Button";
import { useGame } from "../../hooks/useGame";
import { useGameControls } from "../../hooks/useGameControls";
import "./GamePage.css";

const GamePage = ({ onGameEnd, onReturnToStart }) => {
  const { gameState, movePlayer, endGame, getGameTime } = useGame();
  const { activeDirection, handleButtonMove } = useGameControls(movePlayer);

  const handleManualMove = (direction) => {
    handleButtonMove(direction);
  };

  const handleEndGame = () => {
    endGame();
    onGameEnd();
  };

  React.useEffect(() => {
    if (!gameState.isPlaying && gameState.startTime) {
      onGameEnd();
    }
  }, [gameState.isPlaying, gameState.startTime, onGameEnd]);

  return (
    <div className="game-page">
      <Header title="Maze Runner - Гра" />

      <main className="game-page__content">
        <div className="game-page__info">
          <p>
            Рівень: {gameState.level} | Кроки: {gameState.steps} | Час:{" "}
            {getGameTime()}с
          </p>
        </div>

        <MazeGrid
          maze={gameState.maze}
          playerPosition={gameState.playerPosition}
          exitPosition={gameState.exitPosition}
        />

        <GameControls
          onMove={handleManualMove}
          activeDirection={activeDirection}
        />

        <div className="game-page__controls">
          <Button variant="secondary" onClick={onReturnToStart}>
            На головну
          </Button>
          <Button variant="primary" onClick={handleEndGame}>
            Завершити гру
          </Button>
        </div>
      </main>
    </div>
  );
};

export default GamePage;
