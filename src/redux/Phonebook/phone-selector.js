export const getContacts = state => state.contact;

export const getFilter = state => state.filter;

export const getFiltredContacts = state => {

    const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
//   const normalizeFilter = getFilter(state).toLowerCase();
//   return getContacts(state).filter(({ name }) =>
//    name.toLowerCase().includes(normalizeFilter),
//   );
};


// export const getVisibleContact = state => {
//     const normalizedFilter = filterValue(state).toLowerCase();
//     const filteredContacts = getContacts(state).filter(({ name }) =>
//         name.toLowerCase().includes(normalizedFilter),
//     );
//     return filteredContacts;
// };