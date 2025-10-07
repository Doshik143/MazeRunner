import Header from "../../components/layout/Header/Header";
import Button from "../../components/UI/Button/Button";
import "./StartPage.css";

const StartPage = ({ onStartGame }) => {
  return (
    <div className="start-page">
      <Header title="Maze Runner - Start" />

      <main className="start-page__content">
        <div className="start-page__welcome">
          <h2>Welcome до лабіринту!</h2>
          <p>Знайди вихід з лабіринту, використовуючи клавіші керування</p>
        </div>

        <div className="start-page__actions">
          <Button variant="primary" onClick={onStartGame}>
            Start
          </Button>
          <Button variant="secondary">Settings</Button>
        </div>
      </main>
    </div>
  );
};

export default StartPage;
