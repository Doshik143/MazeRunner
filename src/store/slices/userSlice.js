import { createSlice } from "@reduxjs/toolkit";

const loadUserProfilesFromStorage = () => {
  const savedProfiles = localStorage.getItem("mazeRunnerUserProfiles");
  return savedProfiles ? JSON.parse(savedProfiles) : {};
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    profiles: loadUserProfilesFromStorage(),
    currentUserId: null,
  },
  reducers: {
    updateUserProfile: (state, action) => {
      const { userId, profileData } = action.payload;
      state.profiles[userId] = { ...state.profiles[userId], ...profileData };
      localStorage.setItem(
        "mazeRunnerUserProfiles",
        JSON.stringify(state.profiles)
      );
    },
    setCurrentUser: (state, action) => {
      state.currentUserId = action.payload;
    },
    createNewUser: (state, action) => {
      const userId = action.payload;
      if (!state.profiles[userId]) {
        state.profiles[userId] = {
          username: `Гравець_${userId.slice(-4)}`,
          email: `player${userId.slice(-4)}@example.com`,
          favoriteDifficulty: "medium",
          createdAt: new Date().toISOString(),
        };
        localStorage.setItem(
          "mazeRunnerUserProfiles",
          JSON.stringify(state.profiles)
        );
      }
      state.currentUserId = userId;
    },
  },
});

export const { updateUserProfile, setCurrentUser, createNewUser } =
  userSlice.actions;
export default userSlice.reducer;
