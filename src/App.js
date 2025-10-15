import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import GamePage from "./pages/GamePage/GamePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import { useNavigation } from "./hooks/useNavigation";

function App() {
  const { currentPage, navigateToStart, navigateToGame, navigateToResults } =
    useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "start":
        return <StartPage onStartGame={navigateToGame} />;
      case "game":
        return (
          <GamePage
            onGameEnd={navigateToResults}
            onReturnToStart={navigateToStart}
          />
        );
      case "results":
        return (
          <ResultsPage
            onRestart={navigateToGame}
            onReturnToStart={navigateToStart}
          />
        );
      default:
        return <StartPage onStartGame={navigateToGame} />;
    }
  };

  return <div className="App">{renderCurrentPage()}</div>;
}

export default App;
