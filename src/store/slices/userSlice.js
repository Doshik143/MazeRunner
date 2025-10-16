import { createSlice } from "@reduxjs/toolkit";

const loadUserProfilesFromStorage = () => {
  const savedProfiles = localStorage.getItem("mazeRunnerUserProfiles");
  return savedProfiles ? JSON.parse(savedProfiles) : {};
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    profiles: loadUserProfilesFromStorage(),
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
  },
});

export const { updateUserProfile } = userSlice.actions;

export const selectUserProfile = (state, userId) =>
  state.user.profiles[userId] || {
    username: `Гравець_${userId.slice(-4)}`,
    email: `player${userId.slice(-4)}@example.com`,
    favoriteDifficulty: "medium",
  };

export default userSlice.reducer;
