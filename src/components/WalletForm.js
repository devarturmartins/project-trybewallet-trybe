import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="despesas">
            <input
              name="despesas"
              id="despesas"
              type="text"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="description">
            <textarea
              name="description"
              id="description"
              type="text"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="currencies">
            <select id="currencies" data-testid="currency-input">
              {
                Object.keys(currencies).map((e,index) => (
                  index !== 1 && (
                    <option key={ e }>{ e }</option>
                  )
                ))
              }
            </select>
          </label>

          <label htmlFor="pay">
            <select data-testid="method-input" id="pay">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tipoDespesa">
            <select id="tipoDespesa" data-testid="tag-input">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies.currenciesInfo,
});

export default connect(mapStateToProps)(WalletForm);
