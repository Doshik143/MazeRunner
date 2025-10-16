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

  const startGame = useCallback((difficulty = "medium") => {
    const startTime = new Date();
    const initialMaze = generateMaze(difficulty);
    const playerStart = findStartPosition(initialMaze);
    const exitPos = findExitPosition(initialMaze);

    setGameState({
      difficulty,
      steps: 0,
      isPlaying: true,
      startTime,
      endTime: null,
      playerPosition: playerStart,
      maze: initialMaze,
      exitPosition: exitPos,
    });
  }, []);

  const movePlayer = useCallback((direction) => {
    setGameState((prevState) => {
      if (!prevState.isPlaying) return prevState;

      const newPosition = calculateNewPosition(
        prevState.playerPosition,
        direction
      );

      if (!isValidMove(newPosition, prevState.maze)) {
        return prevState;
      }

      const exitReached = isExitReached(newPosition, prevState.exitPosition);

      return {
        ...prevState,
        playerPosition: newPosition,
        steps: prevState.steps + 1,
        isPlaying: !exitReached,
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

  const generateMaze = (difficulty) => {
    const sizes = {
      easy: 9,
      medium: 13,
      hard: 17,
    };

    const size = sizes[difficulty] || 13;
    const maze = Array(size)
      .fill()
      .map(() => Array(size).fill(1));
    const visited = Array(size)
      .fill()
      .map(() => Array(size).fill(false));
    const stack = [[1, 1]];

    maze[1][1] = 0;
    visited[1][1] = true;

    const directions = [
      [0, 2],
      [2, 0],
      [0, -2],
      [-2, 0],
    ];

    while (stack.length > 0) {
      const [x, y] = stack[stack.length - 1];
      const availableDirs = directions.filter(([dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        return (
          nx > 0 && nx < size - 1 && ny > 0 && ny < size - 1 && !visited[nx][ny]
        );
      });

      if (availableDirs.length > 0) {
        const [dx, dy] =
          availableDirs[Math.floor(Math.random() * availableDirs.length)];
        const nx = x + dx;
        const ny = y + dy;

        maze[x + dx / 2][y + dy / 2] = 0;
        maze[nx][ny] = 0;
        visited[nx][ny] = true;
        stack.push([nx, ny]);
      } else {
        stack.pop();
      }
    }

    for (let i = 1; i < size - 1; i++) {
      for (let j = 1; j < size - 1; j++) {
        if (Math.random() < 0.1 && maze[i][j] === 1) {
          const neighbors = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
          ];
          const emptyNeighbors = neighbors.filter(
            ([dx, dy]) => maze[i + dx] && maze[i + dx][j + dy] === 0
          );
          if (emptyNeighbors.length <= 1) {
            maze[i][j] = 0;
          }
        }
      }
    }

    maze[1][1] = 0;
    maze[size - 2][size - 2] = 0;

    let exitX = size - 2;
    let exitY = size - 2;

    const exitDirections = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const validExits = exitDirections.filter(
      ([dx, dy]) => maze[exitX + dx] && maze[exitX + dx][exitY + dy] === 0
    );

    if (validExits.length === 0) {
      maze[exitX][exitY - 1] = 0;
    }

    return maze;
  };

  const findStartPosition = (maze) => {
    return { x: 1, y: 1 };
  };

  const findExitPosition = (maze) => {
    return { x: maze.length - 2, y: maze[0].length - 2 };
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
    if (
      position.x < 0 ||
      position.y < 0 ||
      position.x >= maze.length ||
      position.y >= maze[0].length
    ) {
      return false;
    }
    return maze[position.x][position.y] === 0;
  };

  const isExitReached = (playerPos, exitPos) => {
    return playerPos.x === exitPos.x && playerPos.y === exitPos.y;
  };

  const getGameTime = () => {
    if (!gameState.startTime) return 0;
    const endTime = gameState.endTime || new Date();
    return Math.floor((endTime - gameState.startTime) / 1000);
  };

  const saveGameResult = useCallback((userId, stats) => {
    const userStats = JSON.parse(
      localStorage.getItem(`mazeStats_${userId}`) || "{}"
    );

    userStats.gamesPlayed = (userStats.gamesPlayed || 0) + 1;
    userStats.bestTime = userStats.bestTime
      ? Math.min(userStats.bestTime, stats.time)
      : stats.time;
    userStats.bestSteps = userStats.bestSteps
      ? Math.min(userStats.bestSteps, stats.steps)
      : stats.steps;

    userStats.gameHistory = userStats.gameHistory || [];
    userStats.gameHistory.push({
      date: new Date().toISOString(),
      difficulty: stats.difficulty,
      time: stats.time,
      steps: stats.steps,
      completed: stats.completed,
    });

    userStats.gameHistory = userStats.gameHistory.slice(-50);

    const completedGames = userStats.gameHistory.filter(
      (game) => game.completed
    ).length;
    userStats.completionRate = Math.round(
      (completedGames / userStats.gameHistory.length) * 100
    );

    const difficultyCount = {};
    userStats.gameHistory.forEach((game) => {
      difficultyCount[game.difficulty] =
        (difficultyCount[game.difficulty] || 0) + 1;
    });
    userStats.favoriteDifficulty = Object.keys(difficultyCount).reduce((a, b) =>
      difficultyCount[a] > difficultyCount[b] ? a : b
    );

    localStorage.setItem(`mazeStats_${userId}`, JSON.stringify(userStats));
  }, []);

  const getUserStats = useCallback((userId) => {
    return JSON.parse(localStorage.getItem(`mazeStats_${userId}`) || "{}");
  }, []);

  return {
    gameState,
    startGame,
    movePlayer,
    endGame,
    resetGame,
    getGameTime,
    saveGameResult,
    getUserStats,
  };
};
