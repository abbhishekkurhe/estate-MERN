import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Ensure default import
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({user:userReducer});

const persistConfig={
  key:'root',
  storage,
  version:1,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer, // No change needed here
  middleware: (getDefaultMiddleware) => // Fixed typo here
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools:true,
});
export const persistor = persistStore(store);