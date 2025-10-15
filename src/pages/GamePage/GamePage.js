import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import { useGameControls } from "../../hooks/useGameControls";
import { useSettings } from "../../context/SettingsContext";
import MazeGrid from "../../components/game/MazeGrid/MazeGrid";
import GameControls from "../../components/game/GameControls/GameControls";
import GameOverDialog from "../../components/game/GameOverDialog/GameOverDialog";
import { PageContainer, Card, Button } from "../../App.styles";
import {
  GameHeader,
  GameInfo,
  GameContent,
  ControlSection,
} from "./GamePage.styles";

const GamePage = () => {
  const { userId = "default" } = useParams();
  const navigate = useNavigate();
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
    navigate(`/user/${userId}/results`);
  };

  const handleReturnToStart = () => {
    navigate(`/user/${userId}`);
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
    <PageContainer>
      <Card>
        <GameHeader>
          <h1>Maze Runner - Game</h1>
          <p>Гравець: #{userId}</p>
        </GameHeader>

        <GameInfo>
          <span>⏱ Час: {getGameTime()}с</span>
          <span> | Кроки: {gameState.steps} | </span>
          <span>
            Складність:{" "}
            {settings.difficulty === "easy"
              ? "Легка"
              : settings.difficulty === "medium"
              ? "Середня"
              : "Складна"}
          </span>
        </GameInfo>

        <GameContent>
          <MazeGrid
            maze={gameState.maze}
            playerPosition={gameState.playerPosition}
            exitPosition={gameState.exitPosition}
          />
        </GameContent>

        <ControlSection>
          {settings.controls === "buttons" && (
            <GameControls
              onMove={handleManualMove}
              activeDirection={activeDirection}
            />
          )}

          <div>
            <Button variant="secondary" onClick={handleReturnToStart}>
              На головну
            </Button>
            <Button variant="primary" onClick={handleEndGame}>
              Завершити гру
            </Button>
          </div>
        </ControlSection>
      </Card>

      <GameOverDialog
        isOpen={showGameOverDialog}
        onClose={handleReturnToStart}
        onRestart={handleRestart}
        onNextLevel={handleNextLevel}
        gameStats={gameStats}
        hasNextLevel={gameState.level < 10}
      />
    </PageContainer>
  );
};

export default GamePage;
