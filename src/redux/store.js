import { configureStore } from '@reduxjs/toolkit';
import userRegistrationReducer from './slices/userSlice';
import cardsReducer from './slices/cardSlice';

// Configure the store with reducers for user and cards
const store = configureStore({
  reducer: {
    userRegistration: userRegistrationReducer,
    cards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
