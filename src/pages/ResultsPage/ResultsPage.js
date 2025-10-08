import Header from "../../components/layout/Header/Header";
import Button from "../../components/UI/Button/Button";
import "./ResultsPage.css";

const ResultsPage = ({ onRestart, onReturnToStart }) => {
  return (
    <div className="results-page">
      <Header title="Maze Runner - Results" />

      <main className="results-page__content">
        <div className="results-page__stats">
          <h2>Гру завершено!</h2>
          <p>Час: --:--</p>
          <p>Кроки: --</p>
          <p>Результат: --</p>
        </div>

        <div className="results-page__actions">
          <Button variant="primary" onClick={onRestart}>
            Грати знову
          </Button>
          <Button variant="secondary" onClick={onReturnToStart}>
            На головну
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
