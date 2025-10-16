import { createSlice } from "@reduxjs/toolkit";

const loadStatsFromStorage = () => {
  const savedStats = localStorage.getItem("mazeRunnerStats");
  return savedStats ? JSON.parse(savedStats) : {};
};

const gameStatsSlice = createSlice({
  name: "gameStats",
  initialState: {
    stats: loadStatsFromStorage(),
  },
  reducers: {
    updateUserStats: (state, action) => {
      const { userId, gameResult } = action.payload;
      console.log("🔄 Оновлення статистики для:", userId, gameResult);

      const userCurrentStats = state.stats[userId] || {
        gamesPlayed: 0,
        gamesWon: 0,
        bestTime: null,
        bestSteps: null,
        totalSteps: 0,
        totalTime: 0,
      };

      const newStats = {
        gamesPlayed: userCurrentStats.gamesPlayed + 1,
        gamesWon: userCurrentStats.gamesWon + (gameResult.isSuccess ? 1 : 0),
        bestTime: gameResult.isSuccess
          ? userCurrentStats.bestTime === null
            ? gameResult.time
            : Math.min(userCurrentStats.bestTime, gameResult.time)
          : userCurrentStats.bestTime,
        bestSteps: gameResult.isSuccess
          ? userCurrentStats.bestSteps === null
            ? gameResult.steps
            : Math.min(userCurrentStats.bestSteps, gameResult.steps)
          : userCurrentStats.bestSteps,
        totalSteps: userCurrentStats.totalSteps + gameResult.steps,
        totalTime: userCurrentStats.totalTime + gameResult.time,
      };

      state.stats[userId] = newStats;
      localStorage.setItem("mazeRunnerStats", JSON.stringify(state.stats));
      console.log("📊 Нова статистика:", newStats);
    },
  },
});

export const { updateUserStats } = gameStatsSlice.actions;

export const selectAllStats = (state) => state.gameStats.stats;
export const selectUserStats = (state, userId) =>
  state.gameStats.stats[userId] || {
    gamesPlayed: 0,
    gamesWon: 0,
    bestTime: null,
    bestSteps: null,
    totalSteps: 0,
    totalTime: 0,
  };

export default gameStatsSlice.reducer;
