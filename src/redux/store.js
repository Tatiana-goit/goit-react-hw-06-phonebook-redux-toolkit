import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './Phonebook/phone-reducers';

const store = createStore(contactReducer, composeWithDevTools());
export default store;



// import { configureStore } from '@reduxjs/toolkit';
// import contactReducer from './Phonebook/phone-reducers';

// const store = configureStore({
//   reducer: contactReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;
