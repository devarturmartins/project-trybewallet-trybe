// Coloque aqui suas actions.
import { fetchApi } from '../../services/fetchApi';

export const ADD_EMAIL = 'ADD_EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const EXPENSES = 'EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const ATT_EXPENSES = 'ATT_EXPENSES';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

export const expenses = (expensesInfo) => ({
  type: EXPENSES,
  payload: {
    expensesInfo,
  },
});

const currencies = (currenciesInfo) => ({
  type: CURRENCIES,
  payload: {
    currenciesInfo,
  },
});

export const removeExpenses = (removeExpensesInfo) => ({
  type: REMOVE_EXPENSES,
  payload: {
    removeExpensesInfo,
  },
});

export const expensesEdit = (id) => ({
  type: EDIT_EXPENSES,
  id,
});

export const attExpenses = (expensesAttInfo) => ({
  type: ATT_EXPENSES,
  payload: {
    expensesAttInfo,
  },
});

export const fetchApiCurrency = () => async (dispatch) => {
  dispatch(requestStarted());
  const currenciesInfo = await fetchApi();
  dispatch(currencies(currenciesInfo));
};

// export default addEmail;
