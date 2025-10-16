import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingsSlice";
import gameStatsReducer from "./slices/gameStatsSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    gameStats: gameStatsReducer,
    user: userReducer,
  },
});

export default store;
