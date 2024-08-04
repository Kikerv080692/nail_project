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
import { scheduleApi } from './contacts/schedule';
import { clientsApi } from './clients/clients';

  const middleware = getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    scheduleApi.middleware,
    clientsApi.middleware
  ];


  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}


  export const store = configureStore({
    reducer: {
        [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
        [scheduleApi.reducerPath]: scheduleApi.reducer,
        [clientsApi.reducerPath]: clientsApi.reducer
    },
    middleware,
    
  }) 

  export const persistor = persistStore(store)
