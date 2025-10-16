import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSettings } from "../../store/slices/settingsSlice";
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
  const settings = useSelector(selectSettings);
  const navigate = useNavigate();
  const { userId = "default" } = useParams();

  const handleStartGame = () => {
    navigate(`/user/${userId}/game`);
  };

  const handleProfile = () => {
    navigate(`/user/${userId}/profile`);
  };

  const handleLeaderboard = () => {
    navigate(`/user/${userId}/leaderboard`);
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
            <Button variant="secondary" onClick={handleLeaderboard}>
              Таблиця результатів
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
            onCancel={() => setShowSettings(false)}
          />
        </Modal>
      </PageContainer>
    </StartPageContainer>
  );
};

export default StartPage;
