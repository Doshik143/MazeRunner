import Header from "../../components/layout/Header/Header";
import MazeGrid from "../../components/game/MazeGrid/MazeGrid";
import Button from "../../components/UI/Button/Button";
import "./GamePage.css";

const GamePage = ({ onGameEnd, onReturnToStart }) => {
  return (
    <div className="game-page">
      <Header title="Maze Runner - Game" />

      <main className="game-page__content">
        <div className="game-page__info">
          <p>Level: 1 | Кроки: 0</p>
        </div>

        <MazeGrid />

        <div className="game-page__controls">
          <Button variant="secondary" onClick={onReturnToStart}>
            На головну
          </Button>
          <Button variant="secondary" onClick={onGameEnd}>
            Завершити гру
          </Button>
        </div>
      </main>
    </div>
  );
};

export default GamePage;
