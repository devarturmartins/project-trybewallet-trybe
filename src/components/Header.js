import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const valorTotal = expenses.reduce(
      (acc, curr) => acc + curr.value * curr.exchangeRates[curr.currency].ask,
      0,
    );
    return (
      <div>
        <h4 data-testid="email-field">{ email }</h4>
        <p data-testid="total-field">{ valorTotal.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>

    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
