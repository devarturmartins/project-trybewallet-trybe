// Coloque aqui suas actions.
import { fetchApi } from '../../services/fetchApi';

export const ADD_EMAIL = 'ADD_EMAIL';
export const EXPENSES = 'EXPENSES';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

const currencies = (currenciesInfo) => ({
  type: EXPENSES,
  payload: {
    currenciesInfo,
  },
});

export const fetchApiCurrency = () => {
  return async (dispatch) => {
    const currenciesInfo = await fetchApi();
    dispatch(currencies(currenciesInfo));
  }
}

// export default addEmail;
