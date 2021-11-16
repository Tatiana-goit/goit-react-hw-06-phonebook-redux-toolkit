import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, changeFilter } from './phone-actions';
import initialContacts from '../../data.json';

export const contactList = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const contactFilter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
