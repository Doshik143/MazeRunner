import { useState, useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import MazeGrid from "../../components/game/MazeGrid/MazeGrid";
import GameControls from "../../components/game/GameControls/GameControls";
import GameOverDialog from "../../components/game/GameOverDialog/GameOverDialog";
import Button from "../../components/UI/Button/Button";
import { useGame } from "../../hooks/useGame";
import { useGameControls } from "../../hooks/useGameControls";
import { useSettings } from "../../context/SettingsContext";
import "./GamePage.css";

const GamePage = ({ onGameEnd, onReturnToStart }) => {
  const { settings } = useSettings();
  const { gameState, movePlayer, endGame, getGameTime, startGame } = useGame();
  const { activeDirection, handleButtonMove } = useGameControls(movePlayer);
  const [showGameOverDialog, setShowGameOverDialog] = useState(false);

  useEffect(() => {
    startGame(settings.difficulty);
  }, [startGame, settings.difficulty]);

  useEffect(() => {
    if (!gameState.isPlaying && gameState.startTime) {
      setShowGameOverDialog(true);
    }
  }, [gameState.isPlaying, gameState.startTime]);

  const handleManualMove = (direction) => {
    handleButtonMove(direction);
  };

  const handleEndGame = () => {
    endGame();
  };

  const handleRestart = () => {
    setShowGameOverDialog(false);
    startGame(settings.difficulty);
  };

  const handleNextLevel = () => {
    setShowGameOverDialog(false);
    const nextDifficulty =
      settings.difficulty === "easy"
        ? "medium"
        : settings.difficulty === "medium"
        ? "hard"
        : "hard";
    startGame(nextDifficulty);
  };

  const handleCloseDialog = () => {
    setShowGameOverDialog(false);
    onReturnToStart();
  };

  const gameStats = {
    level: gameState.level,
    steps: gameState.steps,
    time: getGameTime(),
    isSuccess:
      gameState.playerPosition.x === gameState.exitPosition.x &&
      gameState.playerPosition.y === gameState.exitPosition.y,
  };

  return (
    <div className="game-page">
      <Header title="Maze Runner - Game" />

      <main className="game-page__content">
        <div className="game-page__info">
          <div className="game-stats">
            <span>Час: {getGameTime()}с</span>
            <span> | Кроки: {gameState.steps} | </span>
            <span>
              Складність:{" "}
              {settings.difficulty === "easy"
                ? "Легка"
                : settings.difficulty === "medium"
                ? "Середня"
                : "Складна"}
            </span>
          </div>
        </div>

        <MazeGrid
          maze={gameState.maze}
          playerPosition={gameState.playerPosition}
          exitPosition={gameState.exitPosition}
        />

        {settings.controls === "buttons" && (
          <GameControls
            onMove={handleManualMove}
            activeDirection={activeDirection}
          />
        )}

        <div className="game-page__controls">
          <Button variant="secondary" onClick={onReturnToStart}>
            На головну
          </Button>
          <Button variant="primary" onClick={handleEndGame}>
            Завершити гру
          </Button>
        </div>
      </main>

      <GameOverDialog
        isOpen={showGameOverDialog}
        onClose={handleCloseDialog}
        onRestart={handleRestart}
        onNextLevel={handleNextLevel}
        gameStats={gameStats}
        hasNextLevel={settings.difficulty !== "hard"}
      />
    </div>
  );
};

export default GamePage;
