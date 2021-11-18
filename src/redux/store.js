import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactList, contactFilter } from './Phonebook/phone-reducers';
// import logger from 'redux-logger';
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
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};


const contactReducer = combineReducers({
  contact: contactList,
  filter: contactFilter,
});

const persisteContactReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: contactReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

export const store = configureStore({
  reducer: persisteContactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    // .concat(logger),
});

export const persistor = persistStore(store);


// ----------FOR VANILA REDUX----------

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactReducer from './Phonebook/phone-reducers';

// const store = createStore(contactReducer, composeWithDevTools());
// export default store;
