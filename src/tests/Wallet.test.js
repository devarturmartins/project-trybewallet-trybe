import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa a Wallet Page', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    userEvent.type(inputEmail, 'artur@betrybe.com');
    userEvent.type(inputPassword, '1234565');
    userEvent.click(button);
  });
  test('Testa se o email logado é exibido na tela', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('heading', {
      name: /artur@betrybe\.com/i,
    });
    expect(email).toBeInTheDocument();
  });
});
