import React from 'react';
import { connect } from 'react-redux';
import { addLogin } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    validation: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validation = () => {
    const { email, password } = this.state;
    const validation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i && password.length > 5;
    return validation;
  };

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    dispatch(addLogin({ ...this.state }));
    history.push('/carteira');
  };

  render() {
    // const { email, password } = this.props;
    const { email, password } = this.state;
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

const mapStateToProps = (state) => ({
  email: state.user.user.email,
  password: state.user.user.password,
});

export default connect(mapStateToProps)(Login);
