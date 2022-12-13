import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    currency: 'USD',
    pay: 'Dinheiro',
    tipoDespesa: 'Alimentação',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    dispatch(action({ ...this.state }));
    history.push('/professionalform');
  };

  render() {
    const { currencies, isFetching } = this.props;
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
                    name="despesas"
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
                    name="pay"
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
                    name="tipoDespesa"
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
                  Adicionar despesa
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

export default connect(mapStateToProps)(WalletForm);
