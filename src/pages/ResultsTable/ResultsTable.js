import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllStats } from "../../store/slices/gameStatsSlice";
import { PageContainer, Card, Button } from "../../App.styles";
import {
  LeaderboardContainer,
  LeaderboardHeader,
  LeaderboardTable,
  TableHeader,
  TableRow,
  UserCell,
  StatCell,
  Badge,
  EmptyState,
} from "./ResultsTable.styles";

const ResultsTable = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const allStats = useSelector(selectAllStats);

  const getUserStatsWithCalculations = (userStats) => {
    const winRate =
      userStats.gamesPlayed > 0
        ? Math.round((userStats.gamesWon / userStats.gamesPlayed) * 100)
        : 0;

    const avgSteps =
      userStats.gamesPlayed > 0
        ? Math.round(userStats.totalSteps / userStats.gamesPlayed)
        : 0;

    const avgTime =
      userStats.gamesPlayed > 0
        ? Math.round(userStats.totalTime / userStats.gamesPlayed)
        : 0;

    return { winRate, avgSteps, avgTime };
  };

  // Фільтрація та сортування гравців
  const activeUsers = Object.entries(allStats)
    .filter(([_, stats]) => stats.gamesPlayed >= 1) // Мінімум 1 гра
    .map(([userKey, stats]) => {
      const calculated = getUserStatsWithCalculations(stats);
      return {
        userId: userKey,
        ...stats,
        ...calculated,
      };
    })
    .sort((a, b) => {
      if (b.winRate !== a.winRate) {
        return b.winRate - a.winRate;
      }
      if (a.bestTime === null) return 1;
      if (b.bestTime === null) return -1;
      return a.bestTime - b.bestTime;
    })
    .map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `#${rank}`;
    }
  };

  const getWinRateColor = (winRate) => {
    if (winRate >= 80) return "#4CAF50";
    if (winRate >= 60) return "#8BC34A";
    if (winRate >= 40) return "#FFC107";
    if (winRate >= 20) return "#FF9800";
    return "#F44336";
  };

  return (
    <PageContainer>
      <Card>
        <LeaderboardContainer>
          <LeaderboardHeader>
            <h1>🏆 Таблиця результатів</h1>
            <p>Рейтинг гравців за успішністю проходження лабіринтів</p>
          </LeaderboardHeader>

          {activeUsers.length > 0 ? (
            <>
              <LeaderboardTable>
                <TableHeader>
                  <tr>
                    <th>Місце</th>
                    <th>Гравець</th>
                    <th>Ігор</th>
                    <th>Перемог</th>
                    <th>Успішність</th>
                    <th>Найкращий час</th>
                    <th>Найкращі кроки</th>
                    <th>Середні кроки</th>
                  </tr>
                </TableHeader>
                <tbody>
                  {activeUsers.map((user) => {
                    const isCurrentUser = user.userId === userId;

                    return (
                      <TableRow key={user.userId} $isCurrent={isCurrentUser}>
                        <StatCell>
                          <Badge $rank={user.rank}>
                            {getRankBadge(user.rank)}
                          </Badge>
                        </StatCell>
                        <UserCell $isCurrent={isCurrentUser}>
                          {isCurrentUser ? "⭐ " : ""}
                          {user.userId.slice(0, 10)}...
                          {isCurrentUser && " (Ви)"}
                        </UserCell>
                        <StatCell>{user.gamesPlayed}</StatCell>
                        <StatCell>{user.gamesWon}</StatCell>
                        <StatCell>
                          <span
                            style={{ color: getWinRateColor(user.winRate) }}
                          >
                            {user.winRate}%
                          </span>
                        </StatCell>
                        <StatCell>
                          {user.bestTime !== null ? `${user.bestTime}с` : "---"}
                        </StatCell>
                        <StatCell>
                          {user.bestSteps !== null ? user.bestSteps : "---"}
                        </StatCell>
                        <StatCell>{user.avgSteps}</StatCell>
                      </TableRow>
                    );
                  })}
                </tbody>
              </LeaderboardTable>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                <div>
                  <strong>Всього гравців:</strong> {activeUsers.length}
                </div>
                <div>
                  <strong>Ваше місце:</strong>{" "}
                  {activeUsers.find((user) => user.userId === userId)?.rank ||
                    "---"}
                </div>
              </div>
            </>
          ) : (
            <EmptyState>
              <h3>📊 Ще немає статистики</h3>
              <p>Зіграйте кілька ігор, щоб побачити рейтинг</p>
              <p style={{ fontSize: "14px", opacity: 0.7 }}>
                Для попадання в таблицю потрібно зіграти хоча б одну гру
              </p>
            </EmptyState>
          )}

          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="primary"
              onClick={() => navigate(`/user/${userId}`)}
            >
              На головну
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate(`/user/${userId}/game`)}
            >
              🎮 Грати
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate(`/user/${userId}/profile`)}
            >
              👤 Профіль
            </Button>
          </div>
        </LeaderboardContainer>
      </Card>
    </PageContainer>
  );
};

export default ResultsTable;
