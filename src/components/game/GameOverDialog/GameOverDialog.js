import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import {
  DialogContainer,
  DialogStats,
  StatItem,
  DialogMessage,
  DialogActions,
} from "./GameOverDialog.styles";

const GameOverDialog = ({ isOpen, onClose, onRestart, gameStats }) => {
  const { steps, time, isSuccess } = gameStats;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isSuccess ? "🎉 Вітаємо!" : "Не пощастило("}
    >
      <DialogContainer>
        <DialogStats>
          <StatItem>
            <span className="stat-label">Кроки:</span>
            <span className="stat-value">{steps}</span>
          </StatItem>
          <StatItem>
            <span className="stat-label">Час:</span>
            <span className="stat-value">{time}с</span>
          </StatItem>
          <StatItem>
            <span className="stat-label">Результат:</span>
            <span className="stat-value success">
              {isSuccess ? "Перемога!" : "Спробуйте ще"}
            </span>
          </StatItem>
        </DialogStats>

        <DialogMessage>
          {isSuccess ? (
            <p>Ви успішно пройшли лабіринт! Бажаєте продовжити?</p>
          ) : (
            <p>Не вдалось знайти вихід. Спробуйте ще раз!</p>
          )}
        </DialogMessage>

        <DialogActions>
          <Button variant="secondary" onClick={onClose}>
            Продовжити
          </Button>
        </DialogActions>
      </DialogContainer>
    </Modal>
  );
};

export default GameOverDialog;
