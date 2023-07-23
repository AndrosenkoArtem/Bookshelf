import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from './auth/slice';
import { booksReducer } from './books/slice';
import { themeReducer } from './theme/slice';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const bookPersistorConfig = {
  key: 'books',
  storage,
  whitelist: ['catalogBooks'],
};
const themePersistorConfig = {
  key: 'theme',
  storage,
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    books: persistReducer(bookPersistorConfig, booksReducer),
    theme: persistReducer(themePersistorConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
