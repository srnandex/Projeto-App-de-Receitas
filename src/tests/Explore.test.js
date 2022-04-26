import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Explore from '../pages/Explore';

describe('Testa o componente Explore.js', () => {
  it('Teste se o topo da aplicação contém todos os items do corpo principal',
    () => {
      renderWithRouter(<Explore />);
      const foodText = screen.getByText(/explore foods/i);
      const drinksText = screen.getByText(/explore drinks/i);
      const button1 = screen.getByTestId('explore-foods');
      const button2 = screen.getByTestId('explore-drinks');

      expect(foodText).toBeInTheDocument();
      expect(drinksText).toBeInTheDocument();
      expect(button1).toBeDefined();
      expect(button2).toBeDefined();
    });
  it('Testa o redirecionamento do link "Explore Foods"',
    () => {
      const { history } = renderWithRouter(<Explore />);

      const buttonFood = screen.getByRole('button', { name: /explore foods/i });
      expect(buttonFood).toBeDefined();

      userEvent.click(buttonFood);
      const { pathname } = history.location;
      expect(pathname).toBe('/explore/foods');
    });
  it('Testa o redirecionamento do link "Explore Drinks"',
    () => {
      const { history } = renderWithRouter(<Explore />);

      const buttonDrinks = screen.getByRole('button', { name: /explore drinks/i });
      expect(buttonDrinks).toBeDefined();

      userEvent.click(buttonDrinks);
      const { pathname } = history.location;
      expect(pathname).toBe('/explore/drinks');
    });
});
