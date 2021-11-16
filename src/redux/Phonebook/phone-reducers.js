import { combineReducers } from 'redux';
import initialContacts from '../../data.json';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './phone-types';

const contactList = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const contactFilter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactReducer = combineReducers({
  contact: contactList,
  filter: contactFilter,
});

export default contactReducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import initialContacts from '../data.json';
// import actions from './actions'
// import { ADD_CONTACT, DELETE_CONTACT } from './types';

// const contactList = createReducer(initialContacts, {
//   [actions.addContact]: (state, { payload }) => [...state, payload],
//   [actions.deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload.id),
// });

// const contactFilter = createReducer("", {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// const contactReducer = combineReducers({
//   contact: contactList,
//   filter: contactFilter,
// });

// export default contactReducer;

// import { combineReducers } from 'redux';
// import initialContacts from '../data.json';
// import { ADD_CONTACT, DELETE_CONTACT } from './types';

// const initialState = initialContacts;

// // const initialState = {
// //   contacts:
// //     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts,
// // //   filter: '',
// // };

// const contactList = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       /////'contact/add'/добавить проверку на существующее имя
//       return [...state, payload];
//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload.id);
//     default:
//       return state;
//   }
// };

// const contactFilter = (state = '', { type, payload }) => {
//   switch (type) {
//     //   case types.FILTER:
//     //     return payload;

//     default:
//       return state;
//   }
// };

// const contactReducer = combineReducers({
//   contact: contactList,
//   filter: contactFilter,
// });

// export default contactReducer;
