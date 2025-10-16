import { createSlice } from "@reduxjs/toolkit";

const loadSettingsFromStorage = () => {
  const savedSettings = localStorage.getItem("mazeRunnerSettings");
  return savedSettings
    ? JSON.parse(savedSettings)
    : {
        difficulty: "medium",
        controls: "keyboard",
      };
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: loadSettingsFromStorage(),
  reducers: {
    updateSettings: (state, action) => {
      const newSettings = { ...state, ...action.payload };
      localStorage.setItem("mazeRunnerSettings", JSON.stringify(newSettings));
      return newSettings;
    },
    resetSettings: (state) => {
      const defaultSettings = {
        difficulty: "medium",
        controls: "keyboard",
      };
      localStorage.setItem(
        "mazeRunnerSettings",
        JSON.stringify(defaultSettings)
      );
      return defaultSettings;
    },
  },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;

export const selectSettings = (state) => state.settings;
export const selectDifficulty = (state) => state.settings.difficulty;
export const selectControls = (state) => state.settings.controls;

export default settingsSlice.reducer;
