const initialState = JSON.parse(localStorage.getItem("conacts")) || [];

const addToLocalStorage = (state) => {
  localStorage.setItem("conacts", JSON.stringify(state));
};

const addContacts = (state, payload) => {
  const newState = [...state, payload];
  addToLocalStorage(newState);
  return newState;
};

const deleteContacts = (state, payload) => {
  const newState = state.filter(
    (contact) => JSON.stringify(contact) !== JSON.stringify(payload)
  );
  addToLocalStorage(newState);
  return newState;
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return addContacts(state, payload);
    case "delete":
      return deleteContacts(state, payload);

    default:
      return state;
  }
};

export { initialState };
export default reducer;
