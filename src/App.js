import { useState } from "react";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import GamePage from "./pages/GamePage/GamePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("start");

  const handleStartGame = () => {
    setCurrentPage("game");
  };

  const handleGameEnd = () => {
    setCurrentPage("results");
  };

  const handleReturnToStart = () => {
    setCurrentPage("start");
  };

  const handleRestart = () => {
    setCurrentPage("game");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "start":
        return <StartPage onStartGame={handleStartGame} />;
      case "game":
        return (
          <GamePage
            onGameEnd={handleGameEnd}
            onReturnToStart={handleReturnToStart}
          />
        );
      case "results":
        return (
          <ResultsPage
            onRestart={handleRestart}
            onReturnToStart={handleReturnToStart}
          />
        );
      default:
        return <StartPage onStartGame={handleStartGame} />;
    }
  };

  return <div className="App">{renderCurrentPage()}</div>;
}

export default App;
