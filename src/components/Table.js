import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expensesEdit, removeExpenses } from '../redux/actions';

class Table extends Component {
  deleteExpenses = (id) => {
    const { dispatch, expenses } = this.props;
    const expensesAtt = expenses.filter((e) => e.id !== id);
    dispatch(removeExpenses(expensesAtt));
  };

  editExpenses = (id) => {
    const { dispatch } = this.props;
    dispatch(expensesEdit(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
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
          {
            expenses.map((e) => (
              <tbody key={ e.id }>
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
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      onClick={ () => {
                        this.editExpenses(e.id);
                      } }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => {
                        this.deleteExpenses(e.id);
                      } }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          }

        </table>
      </div>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
