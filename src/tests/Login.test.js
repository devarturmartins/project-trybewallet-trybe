import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa a página de login', () => {
  test('Testa se há um campo de email, senha e um botão com o texto Entrar', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Teste se ao clicar no botão de entrar é redirecionado para a rota /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    userEvent.type(inputEmail, 'artur@betrybe.com');
    userEvent.type(inputPassword, '1234565');
    userEvent.click(button);
    console.log(history);
    expect(history.location.pathname).toBe('/carteira');
  });
});
