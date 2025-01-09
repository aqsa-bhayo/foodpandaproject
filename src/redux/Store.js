import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favouriteSlice';
import cartReducer from '../redux/cartSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export default store;