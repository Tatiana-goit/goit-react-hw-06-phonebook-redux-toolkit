export const getContacts = state => state.contact;

export const getFilter = state => state.filter;

export const getFiltredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};
