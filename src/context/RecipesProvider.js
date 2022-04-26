import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchFoods from '../services/RecipesApi';
import fetchDrinks from '../services/DrinksApi';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [location, setLocation] = useState('');

  const fetchRecipes = async () => {
    if (location === '/foods') {
      setRecipes(await fetchFoods());
    } else if (location === '/drinks') {
      setRecipes(await fetchDrinks());
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [location]);

  const contextValue = {
    recipes,
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
