// Coloque aqui suas actions.
export const ADD_LOGIN = 'ADD_LOGIN';

export const addLogin = (login) => ({
  type: ADD_LOGIN,
  payload: login,
});

export default addLogin;
