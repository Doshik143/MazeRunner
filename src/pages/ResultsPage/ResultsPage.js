import { useNavigate, useParams, useLocation } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Button from "../../components/UI/Button/Button";
import { useGame } from "../../hooks/useGame";
import "./ResultsPage.css";

const ResultsPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { resetGame } = useGame();

  const gameResult = location.state?.gameResult;
  const finalGameState = location.state?.finalGameState;

  const handleRestart = () => {
    resetGame();
    navigate(`/user/${userId}/game`);
  };

  const handleReturnToStart = () => {
    resetGame();
    navigate(`/user/${userId}`);
  };

  const isSuccess =
    gameResult?.isSuccess ||
    (finalGameState?.playerPosition.x === finalGameState?.exitPosition.x &&
      finalGameState?.playerPosition.y === finalGameState?.exitPosition.y);

  const time = gameResult?.time || 0;
  const steps = gameResult?.steps || 0;

  if (!gameResult && !finalGameState) {
    return (
      <div className="results-page">
        <Header title="Maze Runner - Помилка" />
        <main className="results-page__content">
          <h2>Дані гри не знайдено</h2>
          <p>Спробуйте розпочати гру знову</p>
          <Button variant="primary" onClick={handleReturnToStart}>
            На головну
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="results-page">
      <Header title="Maze Runner - Результати" />

      <main className="results-page__content">
        <div className="results-page__stats">
          <h2>Гру {isSuccess ? "успішно завершено! 🎉" : "перервано! ⏰"}</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Час:</span>
              <span className="stat-value">{time}с</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Кроки:</span>
              <span className="stat-value">{steps}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Результат:</span>
              <span className="stat-value">
                {isSuccess ? "Перемога! 🎉" : "Спробуйте ще! 💪"}
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
