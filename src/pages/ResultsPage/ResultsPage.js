import { useNavigate, useParams, useLocation } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Button from "../../components/UI/Button/Button";
import { useGame } from "../../hooks/useGame";
import {
  ResultsContainer,
  ResultsContent,
  ResultsStats,
  StatsGrid,
  StatItem,
  Actions,
  ErrorMessage,
} from "./ResultsPage.styles";

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
      <ResultsContainer>
        <Header title="Maze Runner - Помилка" />
        <ResultsContent>
          <ErrorMessage>
            <h2>Дані гри не знайдено</h2>
            <p>Спробуйте розпочати гру знову</p>
            <Button variant="primary" onClick={handleReturnToStart}>
              На головну
            </Button>
          </ErrorMessage>
        </ResultsContent>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <Header title="Maze Runner - Результати" />

      <ResultsContent>
        <ResultsStats>
          <h2>Гру {isSuccess ? "успішно завершено! 🎉" : "перервано! ⏰"}</h2>
          <StatsGrid>
            <StatItem>
              <span className="stat-label">Час:</span>
              <span className="stat-value">{time}с</span>
            </StatItem>
            <StatItem>
              <span className="stat-label">Кроки:</span>
              <span className="stat-value">{steps}</span>
            </StatItem>
            <StatItem>
              <span className="stat-label">Результат:</span>
              <span className="stat-value result">
                {isSuccess ? "Перемога! 🎉" : "Спробуйте ще! 💪"}
              </span>
            </StatItem>
          </StatsGrid>
        </ResultsStats>

        <Actions>
          <Button variant="primary" onClick={handleRestart}>
            Грати знову
          </Button>
          <Button variant="secondary" onClick={handleReturnToStart}>
            На головну
          </Button>
        </Actions>
      </ResultsContent>
    </ResultsContainer>
  );
};

export default ResultsPage;
