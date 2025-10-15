import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import "./GameOverDialog.css";

const GameOverDialog = ({ isOpen, onClose, onRestart, gameStats }) => {
  const { steps, time, isSuccess } = gameStats;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isSuccess ? "🎉 Вітаємо!" : "⏰ Не пощастило("}
    >
      <div className="game-over-dialog">
        <div className="game-over-stats">
          <div className="stat-item">
            <span className="stat-label">Кроки:</span>
            <span className="stat-value">{steps}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Час:</span>
            <span className="stat-value">{time}с</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Результат:</span>
            <span className="stat-value success">
              {isSuccess ? "Перемога!" : "Спробуйте ще"}
            </span>
          </div>
        </div>

        <div className="game-over-message">
          {isSuccess ? (
            <p>Ви успішно пройшли лабіринт! Бажаєте продовжити?</p>
          ) : (
            <p>Не вдалось знайти вихід. Спробуйте ще раз!</p>
          )}
        </div>

        <div className="game-over-actions">
          <Button variant="secondary" onClick={onClose}>
            На головну
          </Button>
          <Button variant="primary" onClick={onRestart}>
            Грати знову
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default GameOverDialog;
