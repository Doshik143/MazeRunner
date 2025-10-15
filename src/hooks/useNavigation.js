import { useState, useCallback } from "react";

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState("start");

  const navigateToStart = useCallback(() => {
    setCurrentPage("start");
  }, []);

  const navigateToGame = useCallback(() => {
    setCurrentPage("game");
  }, []);

  const navigateToResults = useCallback(() => {
    setCurrentPage("results");
  }, []);

  return {
    currentPage,
    navigateToStart,
    navigateToGame,
    navigateToResults,
  };
};
