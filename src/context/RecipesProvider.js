import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchFoods from '../services/RecipesApi';
import fetchDrinks from '../services/DrinksApi';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      if (location === '/foods') {
        setRecipes(await fetchFoods());
        setCategories(await fetchFoods('category'));
      } else if (location === '/drinks') {
        setRecipes(await fetchDrinks());
        setCategories(await fetchDrinks('category'));
      }
    };

    fetchRecipes();
  }, [location]);

  const contextValue = {
    recipes,
    categories,
    filterByCategory,
    setRecipes,
    setLocation,
    setFilterByCategory,
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
