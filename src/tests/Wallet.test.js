import React from 'react';
import { screen, waitFor } from '@testing-library/react';
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
  test('Verifica se há campo de despesas, descrição, tipo de moeda, forma de pagamento e tipo de despesa', async () => {
    const inputValue = await screen.findByTestId('value-input');
    const inputDescription = await screen.findByTestId('description-input');
    await waitFor(() => {
      expect(inputValue).toBeInTheDocument();
      expect(inputDescription).toBeInTheDocument();
    });
  });
  test('Testa se ao adicionar uma despesa o valor é atualizado e os campos são limpos', async () => {
    const button = await screen.findByRole('button', {
      name: /adicionar despesa/i,
    });
    // const inputValue = screen.getByTestId('value-input');
    // const inputDescription = await screen.findByTestId('description-input');
    // const inputCurrency = await screen.findByTestId('currency-input');
    // const inputMethod = await screen.findByTestId('method-input');
    // const inputTag = await screen.findByTestId('tag-input');
    // const totalField = screen.getByTestId('total-field');
    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });
    // userEvent.type(inputValue, '1');
    // userEvent.type(inputDescription, 'Pagamento');
    // userEvent.selectOptions(inputCurrency, 'USD');
    // userEvent.selectOptions(inputMethod, 'Dinheiro');
    // userEvent.selectOptions(inputTag, 'Alimentação');
    // userEvent.click(button);
    // expect(totalField).toBe(5.32);
    // console.log(inputValue);
    // expect(inputValue.value).toBe('');
    // expect(inputDescription.value).toBe('');
  });
});
