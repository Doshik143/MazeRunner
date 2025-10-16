import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectUserStats } from "../../store/slices/gameStatsSlice";
import {
  selectUserProfile,
  updateUserProfile,
} from "../../store/slices/userSlice";
import Modal from "../../components/UI/Modal/Modal";
import { PageContainer, Card, Button } from "../../App.styles";
import {
  ProfileHeader,
  ProfileInfo,
  StatsGrid,
  EditForm,
} from "./UserProfile.styles";

const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);

  const userStats = useSelector((state) => selectUserStats(state, userId));
  const userProfile = useSelector((state) => selectUserProfile(state, userId));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userProfile,
  });

  const handleEditSubmit = (data) => {
    dispatch(updateUserProfile({ userId, profileData: data }));
    setShowEditModal(false);
  };

  return (
    <PageContainer>
      <Card>
        <ProfileHeader>
          <h1>👤 Профіль гравця</h1>
          <p>ID: #{userId}</p>
          <h2>{userProfile.username}</h2>
          <p>{userProfile.email}</p>
        </ProfileHeader>

        <ProfileInfo>
          <StatsGrid>
            <div className="stat">
              <span className="stat-value">{userStats.gamesPlayed}</span>
              <span className="stat-label">Ігор зіграно</span>
            </div>
            <div className="stat">
              <span className="stat-value">{userStats.gamesWon}</span>
              <span className="stat-label">Перемог</span>
            </div>
            <div className="stat">
              <span className="stat-value">
                {userStats.bestTime !== null ? `${userStats.bestTime}с` : "---"}
              </span>
              <span className="stat-label">Найкращий час</span>
            </div>
            <div className="stat">
              <span className="stat-value">
                {userStats.bestSteps !== null ? userStats.bestSteps : "---"}
              </span>
              <span className="stat-label">Найкращі кроки</span>
            </div>
          </StatsGrid>

          <div className="preferences">
            <h3>Уподобання</h3>
            <p>
              <strong>Улюблена складність:</strong>{" "}
              {userProfile.favoriteDifficulty === "easy"
                ? "Легка"
                : userProfile.favoriteDifficulty === "medium"
                ? "Середня"
                : "Складна"}
            </p>
          </div>
        </ProfileInfo>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary" onClick={() => navigate(`/user/${userId}`)}>
            🏠 На головну
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate(`/user/${userId}/game`)}
          >
            🎮 Грати
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate(`/user/${userId}/leaderboard`)}
          >
            📊 Таблиця результатів
          </Button>
          <Button variant="secondary" onClick={() => setShowEditModal(true)}>
            ✏️ Редагувати профіль
          </Button>
        </div>
      </Card>

      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Редагування профілю"
      >
        <EditForm onSubmit={handleSubmit(handleEditSubmit)}>
          <div className="form-group">
            <label>Ім'я користувача:</label>
            <input
              type="text"
              {...register("username", {
                required: "Ім'я обов'язкове",
                minLength: { value: 3, message: "Мінімум 3 символи" },
              })}
              className={errors.username ? "error" : ""}
            />
            {errors.username && (
              <span className="error-message">{errors.username.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              {...register("email", {
                required: "Email обов'язковий",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Невірний формат email",
                },
              })}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Улюблена складність:</label>
            <select {...register("favoriteDifficulty")}>
              <option value="easy">Легка</option>
              <option value="medium">Середня</option>
              <option value="hard">Складна</option>
            </select>
          </div>

          <div className="form-actions">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowEditModal(false)}
            >
              Скасувати
            </Button>
            <Button type="submit" variant="primary">
              Зберегти зміни
            </Button>
          </div>
        </EditForm>
      </Modal>
    </PageContainer>
  );
};

export default UserProfile;
