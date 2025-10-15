import { useState } from "react";
import Header from "../../components/layout/Header/Header";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import SettingsForm from "../../components/forms/SettingsForm"; // Додати /SettingsForm
import { useSettings } from "../../context/SettingsContext";
import "./StartPage.css";

const StartPage = ({ onStartGame }) => {
  const [showSettings, setShowSettings] = useState(false);
  const { settings, updateSettings } = useSettings();

  const handleSettingsSubmit = (newSettings) => {
    updateSettings(newSettings);
    setShowSettings(false);
  };

  const handleStartGame = () => {
    onStartGame();
  };

  return (
    <div className="start-page">
      <Header title="Maze Runner - Start" />

      <main className="start-page__content">
        <div className="start-page__welcome">
          <h2>Welcome до лабіринту!</h2>
          <p>
            Поточні налаштування:{" "}
            {settings.difficulty === "easy"
              ? "Легка"
              : settings.difficulty === "medium"
              ? "Середня"
              : "Складна"}{" "}
            складність
          </p>
        </div>

        <div className="start-page__actions">
          <Button variant="primary" onClick={handleStartGame}>
            Почати гру
          </Button>
          <Button variant="secondary" onClick={() => setShowSettings(true)}>
            Налаштування
          </Button>
        </div>
      </main>

      <Modal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        title="Налаштування гри"
      >
        <SettingsForm
          initialSettings={settings}
          onSubmit={handleSettingsSubmit}
          onCancel={() => setShowSettings(false)}
        />
      </Modal>
    </div>
  );
};

export default StartPage;
