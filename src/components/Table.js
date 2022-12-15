import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        {
          expenses.map((e) => (
            <table key={ e.id }>
              <thead>
                <tr>
                  <th>
                    Descrição
                  </th>
                  <th>
                    Tag
                  </th>
                  <th>
                    Método de pagamento
                  </th>
                  <th>
                    Valor
                  </th>
                  <th>
                    Moeda
                  </th>
                  <th>
                    Câmbio utilizado
                  </th>
                  <th>
                    Valor convertido
                  </th>
                  <th>
                    Moeda de conversão
                  </th>
                  <th>
                    Editar/Excluir
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    { e.description }
                  </td>
                  <td>
                    { e.tag }
                  </td>
                  <td>
                    { e.method }
                  </td>
                  <td>
                    { Number(e.value).toFixed(2) }
                  </td>
                  <td>
                    { e.exchangeRates[e.currency].name }
                  </td>
                  <td>
                    { Number(e.exchangeRates[e.currency].ask).toFixed(2) }
                  </td>
                  <td>
                    { (Number(e.value)
                  * Number(e.exchangeRates[e.currency].ask)).toFixed(2) }
                  </td>
                  <td>
                    Real
                  </td>
                </tr>
              </tbody>
            </table>
          ))
        }
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
