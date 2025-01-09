// redux/slices/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Creating the favorites slice
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [], // List of favorite restaurants
  },
  reducers: {
    // Add a new favorite to the list if it doesn't already exist
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    
    // Remove a favorite by its id
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Exporting the actions to dispatch them in the component
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Exporting the reducer for the store configuration
export default favoritesSlice.reducer;
