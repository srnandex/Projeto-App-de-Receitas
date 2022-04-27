import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe(`Requisito 2: testa se todos os elementos possuem
        os atributos descritos no protótipo para a tela de login`, () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Testa se o input de email possui o atributo data-testid="email-input', () => {
    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();
  });

  test(`Testa se o input de senha deve possui o atributo 
      data-testid="password-input`, () => {
    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();
  });

  test('Testa se o botão Enter possui o atributo data-testid="login-submit-btn"', () => {
    const login = screen.getByTestId('login-submit-btn');
    expect(login).toBeInTheDocument();
  });
});
