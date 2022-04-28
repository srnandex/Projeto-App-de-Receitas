import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods, apiSearchRecipes } from '../services/RecipesApi';
import { fetchDrinks, apiSearchDrink } from '../services/DrinksApi';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState('');
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [RecipeId, setRecipeId] = useState('');
  const [Details, setDetails] = useState({});
  const [Recomendation, setRecomendation] = useState([]);

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

  useEffect(() => {
    const getDetails = async () => {
      if (RecipeId) {
        let details;
        if (location.includes('food')) {
          details = await fetchFoods('id', RecipeId);
          setRecomendation(await fetchDrinks());
        } else {
          details = await fetchDrinks('id', RecipeId);
          setRecomendation(await fetchFoods());
        }
        setDetails(details[0]);
      }
    };

    getDetails();
  }, [RecipeId, location]);

  const getDrinks = async (radio, input) => {
    const drinks = await apiSearchDrink(radio, input);
    setDrinkRecipes(drinks);
  };
  const getFoods = async (radio, input) => {
    const foods = await apiSearchRecipes(radio, input);
    setFoodRecipes(foods);
  };

  const contextValue = {
    drinkRecipes,
    foodRecipes,
    recipes,
    categories,
    filterByCategory,
    Details,
    Recomendation,
    getDrinks,
    getFoods,
    setRecipes,
    setLocation,
    setFilterByCategory,
    setRecipeId,
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
