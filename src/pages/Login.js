import PropTypes from "prop-types"
import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    validation: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validation());
  };

  validation = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const LENGTH_PASSWORD_MIN = 6;
    const validation = regex.test(email) && password.length >= LENGTH_PASSWORD_MIN;
    if (validation === true) {
      this.setState({ validation: true });
    } else {
      this.setState({ validation: false });
    }
  };

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(addEmail({ email }));
    history.push('/carteira');
  };

  render() {
    // const { email, password } = this.props;
    const { email, password, validation } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            disabled={ !validation }
            type="button"
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
}

export default connect()(Login);
