import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenses, attExpenses } from '../redux/actions';
import { fetchApi } from '../services/fetchApi';

class WalletForm extends Component {
  state = {
    id: -1,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  // componentDidMount() {
  //   this.fetchApi();
  // }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async () => {
    const { dispatch, editor, idToEdit, expenses } = this.props;
    if (editor) {
      const request = await fetchApi();
      this.setState({ exchangeRates: request }, () => {
        dispatch(attExpenses({ ...this.state, id: idToEdit }));
      });
    } else {
      const request = await fetchApi();
      console.log(request);
      this.setState({ exchangeRates: request }, () => {
        dispatch(expenses({ ...this.state }));
      });
      this.setState((prev) => ({
        id: prev.id + 1,
      }));
      document.querySelector('input').value = '';
      document.querySelector('textarea').value = '';
    }
  };

  render() {
    const { currencies, isFetching, editor } = this.props;
    const { currency, pay, tipoDespesa } = this.state;
    return (
      <div>
        {
          isFetching === true ? (<p>Carregando...</p>)
            : (
              <form>
                <label htmlFor="despesas">
                  <input
                    onChange={ this.onInputChange }
                    name="value"
                    id="despesas"
                    type="text"
                    data-testid="value-input"
                  />
                </label>

                <label htmlFor="description">
                  <textarea
                    onChange={ this.onInputChange }
                    name="description"
                    id="description"
                    type="text"
                    data-testid="description-input"
                  />
                </label>

                <label htmlFor="currencies">
                  <select
                    onChange={ this.onInputChange }
                    id="currencies"
                    name="currency"
                    value={ currency }
                    data-testid="currency-input"
                  >
                    {
                      currencies.map((e) => (
                        <option key={ e }>{ e }</option>
                      ))
                    }
                  </select>
                </label>

                <label htmlFor="pay">
                  <select
                    onChange={ this.onInputChange }
                    data-testid="method-input"
                    id="pay"
                    name="method"
                    value={ pay }
                  >
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de crédito">Cartão de crédito</option>
                    <option value="Cartão de débito">Cartão de débito</option>
                  </select>
                </label>

                <label htmlFor="tipoDespesa">
                  <select
                    onChange={ this.onInputChange }
                    name="tag"
                    id="tipoDespesa"
                    data-testid="tag-input"
                    value={ tipoDespesa }
                  >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                  </select>
                </label>
                <button
                  type="button"
                  onClick={ this.handleSubmit }
                >
                  {
                    editor ? 'Editar despesa' : 'Adicionar despesa'
                  }
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  editor: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
