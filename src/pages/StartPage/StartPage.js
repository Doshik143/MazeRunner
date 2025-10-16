import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";
import Modal from "../../components/UI/Modal/Modal";
import SettingsForm from "../../components/forms/SettingsForm";
import { PageContainer, Card, Button } from "../../App.styles";
import {
  StartPageContainer,
  WelcomeSection,
  ActionButtons,
} from "./StartPage.styles";

const StartPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { settings, updateSettings } = useSettings();
  const navigate = useNavigate();
  const { userId = "default" } = useParams();

  const handleSettingsSubmit = (newSettings) => {
    updateSettings(newSettings);
    setShowSettings(false);
  };

  const handleStartGame = () => {
    navigate(`/user/${userId}/game`);
  };

  const handleProfile = () => {
    navigate(`/user/${userId}/profile`);
  };

  return (
    <StartPageContainer>
      <PageContainer>
        <Card>
          <WelcomeSection>
            <h1>Maze Runner 🎮</h1>
            <p>Welcome до лабіринту, #{userId}!</p>
            <p>
              Поточні налаштування:{" "}
              {settings.difficulty === "easy"
                ? "Легка"
                : settings.difficulty === "medium"
                ? "Середня"
                : "Складна"}{" "}
              складність
            </p>
          </WelcomeSection>

          <ActionButtons>
            <Button variant="primary" onClick={handleStartGame}>
              Почати гру
            </Button>
            <Button variant="secondary" onClick={() => setShowSettings(true)}>
              Налаштування
            </Button>
            <Button variant="secondary" onClick={handleProfile}>
              Профіль
            </Button>
          </ActionButtons>
        </Card>

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
      </PageContainer>
    </StartPageContainer>
  );
};

export default StartPage;
