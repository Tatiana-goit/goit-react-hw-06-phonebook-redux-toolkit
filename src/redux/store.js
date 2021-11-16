import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactList, contactFilter } from './Phonebook/phone-reducers';
import logger from 'redux-logger';
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
  
  const persistConfig = {
    key: 'products',
    version: 1,
    storage,
    blacklist: ['filter'],
  };

const contactReducer = combineReducers({
    contact: contactList,
    filter: contactFilter,
  }); 

  const persistedProductReducer = persistReducer(persistConfig, contactReducer);


// export const store = configureStore({
//   reducer: contactReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });


export const store = configureStore({
    reducer: persistedProductReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger),
  });
  
  export const persistor = persistStore(store);

