import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Ensure default import

export const store = configureStore({
  reducer: { user: userReducer }, // No change needed here
  middleware: (getDefaultMiddleware) => // Fixed typo here
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools:true,
});
