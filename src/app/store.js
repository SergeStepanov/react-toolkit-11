import { configureStore } from '@reduxjs/toolkit';
import factsSlice from '../features/facts/factsStarWarsSlice';
import photoSlice from '../features/photo/usersPhotoSlice';

export const store = configureStore({
  reducer: {
    facts: factsSlice,
    usersPhoto: photoSlice,
  },
});
