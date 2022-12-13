// Coloque aqui suas actions.
import { fetchApi } from '../../services/fetchApi';

export const ADD_EMAIL = 'ADD_EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const REQUEST_STARTED = 'REQUEST_STARTED';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const currencies = (currenciesInfo) => ({
  type: CURRENCIES,
  payload: {
    currenciesInfo,
  },
});

export const fetchApiCurrency = () => async (dispatch) => {
  dispatch(requestStarted());
  const currenciesInfo = await fetchApi();
  dispatch(currencies(currenciesInfo));
};

// export default addEmail;
