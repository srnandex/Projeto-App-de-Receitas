import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const { foodRecipes, drinkRecipes, getDrinks, getFoods } = useContext(RecipesContext);
  const [radioSelected, setRadioSelected] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (foodRecipes.length === 1) {
      history.push(`/foods/${foodRecipes[0].idMeal}`);
    }
    if (drinkRecipes.length === 1) {
      history.push(`/drinks/${drinkRecipes[0].idDrink}`);
    }
  }, [drinkRecipes, foodRecipes, history]);

  const searchBtn = () => {
    const { pathname } = location;
    if (radioSelected === '') {
      return global.alert('Select Filter');
    }
    if (radioSelected === 'First-Letter' && searchInput.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    if (pathname === '/foods') {
      getFoods(radioSelected, searchInput);
    }
    if (pathname === '/drinks') {
      getDrinks(radioSelected, searchInput);
    }
  };

  return (
    <nav>
      <input
        data-testid="search-input"
        onChange={ ({ target }) => setSearchInput(target.value) }
        type="text"
      />
      <label htmlFor="ingredient">
        Ingredient
        <input
          data-testid="ingredient-search-radio"
          onChange={ ({ target }) => setRadioSelected(target.value) }
          value="Ingredient"
          type="radio"
          name="radio-search"
          id="ingredient"
        />
      </label>
      <label htmlFor="name-search">
        Name
        <input
          data-testid="name-search-radio"
          onChange={ ({ target }) => setRadioSelected(target.value) }
          value="Name"
          type="radio"
          name="radio-search"
          id="name-search"
        />
      </label>
      <label htmlFor="first-letter">
        First Letter
        <input
          data-testid="first-letter-search-radio"
          onChange={ ({ target }) => setRadioSelected(target.value) }
          value="First-Letter"
          type="radio"
          name="radio-search"
          id="first-letter"
        />
      </label>
      <button
        data-testid="exec-search-btn"
        onClick={ searchBtn }
        type="button"
      >
        Search
      </button>
    </nav>
  );
}

export default SearchBar;
