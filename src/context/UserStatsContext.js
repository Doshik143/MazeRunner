import { createContext, useContext, useState, useEffect } from "react";

const UserStatsContext = createContext();

export const UserStatsProvider = ({ children }) => {
  const [userStats, setUserStats] = useState({});

  useEffect(() => {
    const savedStats = localStorage.getItem("mazeRunnerStats");
    if (savedStats) {
      setUserStats(JSON.parse(savedStats));
    }
  }, []);

  const updateUserStats = (userId, gameResult) => {
    console.log("Оновлення статистики для:", userId, gameResult);
    setUserStats((prevStats) => {
      const userCurrentStats = prevStats[userId] || {
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

      const updatedStats = {
        ...prevStats,
        [userId]: newStats,
      };

      localStorage.setItem("mazeRunnerStats", JSON.stringify(updatedStats));
      console.log("Нова статистика:", newStats);
      return updatedStats;
    });
  };

  const getUserStats = (userId) => {
    return (
      userStats[userId] || {
        gamesPlayed: 0,
        gamesWon: 0,
        bestTime: null,
        bestSteps: null,
        totalSteps: 0,
        totalTime: 0,
      }
    );
  };

  return (
    <UserStatsContext.Provider
      value={{ userStats, updateUserStats, getUserStats }}
    >
      {children}
    </UserStatsContext.Provider>
  );
};

export const useUserStats = () => {
  const context = useContext(UserStatsContext);
  if (!context) {
    throw new Error("useUserStats must be used within a UserStatsProvider");
  }
  return context;
};
