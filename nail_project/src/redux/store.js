import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { authSlice } from "./auth/authSlice";

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

  const middleware = getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];


  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}


  export const store = configureStore({
    reducer: {
        [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer)
    },
    middleware,
    
  }) 

  export const persistor = persistStore(store)
