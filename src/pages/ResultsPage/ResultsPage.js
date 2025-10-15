import Header from "../../components/layout/Header/Header";
import Button from "../../components/UI/Button/Button";
import { useGame } from "../../hooks/useGame";
import "./ResultsPage.css";

const ResultsPage = ({ onRestart, onReturnToStart }) => {
  const { gameState, getGameTime, resetGame } = useGame();

  const handleRestart = () => {
    resetGame();
    onRestart();
  };

  const handleReturnToStart = () => {
    resetGame();
    onReturnToStart();
  };

  return (
    <div className="results-page">
      <Header title="Maze Runner - Результати" />

      <main className="results-page__content">
        <div className="results-page__stats">
          <h2>Гру {gameState.isPlaying ? "перервано" : "завершено"}!</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Час: </span>
              <span className="stat-value">{getGameTime()}с</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Кроки: </span>
              <span className="stat-value">{gameState.steps}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Рівень: </span>
              <span className="stat-value">{gameState.level}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Результат: </span>
              <span className="stat-value">
                {gameState.steps > 0
                  ? Math.round((gameState.steps / getGameTime()) * 100) / 100
                  : 0}{" "}
                к/с
              </span>
            </div>
          </div>
        </div>

        <div className="results-page__actions">
          <Button variant="primary" onClick={handleRestart}>
            Грати знову
          </Button>
          <Button variant="secondary" onClick={handleReturnToStart}>
            На головну
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
