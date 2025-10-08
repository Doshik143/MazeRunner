import { useState } from "react";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  const [currentPage, setCurrentPage] = useState("start");

  const handleStartGame = () => {
    setCurrentPage("game");
  };

  const handleReturnToStart = () => {
    setCurrentPage("start");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "start":
        return <StartPage onStartGame={handleStartGame} />;
      case "game":
        return <GamePage onReturnToStart={handleReturnToStart} />;
      default:
        return <StartPage onStartGame={handleStartGame} />;
    }
  };

  return <div className="App">{renderCurrentPage()}</div>;
}

export default App;
