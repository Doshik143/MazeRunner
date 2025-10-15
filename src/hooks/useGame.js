import { useState, useCallback } from "react";

export const useGame = () => {
  const [gameState, setGameState] = useState({
    level: 1,
    steps: 0,
    isPlaying: false,
    startTime: null,
    endTime: null,
    playerPosition: { x: 0, y: 0 },
    maze: [],
    exitPosition: { x: 4, y: 4 },
  });

  const startGame = useCallback((level = 1) => {
    const startTime = new Date();
    const initialMaze = generateMaze(level);
    const playerStart = findStartPosition(initialMaze);

    setGameState({
      level,
      steps: 0,
      isPlaying: true,
      startTime,
      endTime: null,
      playerPosition: playerStart,
      maze: initialMaze,
      exitPosition: findExitPosition(initialMaze),
    });
  }, []);

  const movePlayer = useCallback((direction) => {
    setGameState((prevState) => {
      if (!prevState.isPlaying) return prevState;

      const newPosition = calculateNewPosition(
        prevState.playerPosition,
        direction
      );

      //CheckingPossibilityOfMovement
      if (!isValidMove(newPosition, prevState.maze)) {
        return prevState;
      }

      return {
        ...prevState,
        playerPosition: newPosition,
        steps: prevState.steps + 1,
        isPlaying: !isExitReached(newPosition, prevState.exitPosition),
      };
    });
  }, []);

  const endGame = useCallback(() => {
    setGameState((prevState) => ({
      ...prevState,
      isPlaying: false,
      endTime: new Date(),
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      level: 1,
      steps: 0,
      isPlaying: false,
      startTime: null,
      endTime: null,
      playerPosition: { x: 0, y: 0 },
      maze: [],
      exitPosition: { x: 4, y: 4 },
    });
  }, []);

  const generateMaze = (level) => {
    //TemporaryPlugForMaze
    const size = 5 + level;
    return Array(size)
      .fill()
      .map(() => Array(size).fill(0));
  };

  const findStartPosition = (maze) => {
    return { x: 0, y: 0 };
  };

  const findExitPosition = (maze) => {
    return { x: maze.length - 1, y: maze[0].length - 1 };
  };

  const calculateNewPosition = (currentPos, direction) => {
    const moves = {
      up: { x: currentPos.x - 1, y: currentPos.y },
      down: { x: currentPos.x + 1, y: currentPos.y },
      left: { x: currentPos.x, y: currentPos.y - 1 },
      right: { x: currentPos.x, y: currentPos.y + 1 },
    };
    return moves[direction] || currentPos;
  };

  const isValidMove = (position, maze) => {
    return (
      position.x >= 0 &&
      position.y >= 0 &&
      position.x < maze.length &&
      position.y < maze[0].length
    );
  };

  const isExitReached = (playerPos, exitPos) => {
    return playerPos.x === exitPos.x && playerPos.y === exitPos.y;
  };

  const getGameTime = () => {
    if (!gameState.startTime) return 0;
    const endTime = gameState.endTime || new Date();
    return Math.floor((endTime - gameState.startTime) / 1000);
  };

  return {
    gameState,
    startGame,
    movePlayer,
    endGame,
    resetGame,
    getGameTime,
  };
};
