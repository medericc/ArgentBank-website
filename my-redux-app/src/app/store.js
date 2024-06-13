// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'; // Créez ce fichier selon les besoins

export const store = configureStore({
  reducer: {
    user: userReducer, // Reducer pour gérer les informations de l'utilisateur
    // Ajoutez d'autres reducers au besoin
  },
  // Middleware Redux Thunk pour gérer les actions asynchrones
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactiver la vérification de sérialisation temporairement
    }),
});

export default store;
