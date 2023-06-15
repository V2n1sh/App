import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slicesNews';

export const store = configureStore({
  reducer: {
    newsReducer,
  },
});