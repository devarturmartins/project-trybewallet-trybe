// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES, EXPENSES, REMOVE_EXPENSES, REQUEST_STARTED } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  isFetching: false,
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_STARTED:
    return {
      ...state,
      isFetching: true,
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload.currenciesInfo),
      isFetching: false,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expensesInfo],
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: action.payload.removeExpensesInfo,
    };

  default:
    return state;
  }
};

export default wallet;
