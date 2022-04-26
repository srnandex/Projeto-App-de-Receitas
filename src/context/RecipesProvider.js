import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoodCategories, fetchFoods } from '../services/RecipesApi';
import { fetchDrinkCategories, fetchDrinks } from '../services/DrinksApi';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]);

  const fetchRecipes = async () => {
    if (location === '/foods') {
      setRecipes(await fetchFoods());
      setCategories(await fetchFoodCategories());
    } else if (location === '/drinks') {
      setRecipes(await fetchDrinks());
      setCategories(await fetchDrinkCategories());
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [location]);

  const contextValue = {
    recipes,
    categories,
    setRecipes,
    setLocation,
  };
  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
