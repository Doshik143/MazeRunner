import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import StartPage from "./pages/StartPage/StartPage";
import GamePage from "./pages/GamePage/GamePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import { AppContainer } from "./App.styles";

function App() {
  return (
    <SettingsProvider>
      <Router>
        <AppContainer>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/user/${generateUserId()}`} replace />}
            />
            <Route path="/user/:userId" element={<StartPage />} />
            <Route path="/user/:userId/game" element={<GamePage />} />
            <Route path="/user/:userId/results" element={<ResultsPage />} />
            <Route path="/user/:userId/profile" element={<UserProfile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppContainer>
      </Router>
    </SettingsProvider>
  );
}

const generateUserId = () => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export default App;
