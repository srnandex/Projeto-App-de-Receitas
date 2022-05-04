import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods, apiSearchRecipes } from '../services/RecipesApi';
import { fetchDrinks, apiSearchDrink } from '../services/DrinksApi';
import { fetchFoodsIngredients, fetchDrinksIngredients }
from '../services/IngredientsApi';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState('');
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsImgs, setIngredientsImgs] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (location === '/foods') {
        setRecipes(await fetchFoods());
        setCategories(await fetchFoods('category'));
      } else if (location === '/drinks') {
        setRecipes(await fetchDrinks());
        setCategories(await fetchDrinks('category'));
      }
      if (location === '/explore/foods/ingredients') {
        setIngredientsList(await fetchFoodsIngredients());
      }
      if (location === '/explore/drinks/ingredients') {
        setIngredientsList(await fetchDrinksIngredients());
      }
    };

    fetchRecipes();
  }, [location]);

  const getDrinks = async (radio, input) => {
    const drinks = await apiSearchDrink(radio, input);
    setDrinkRecipes(drinks);
  };
  const getFoods = async (radio, input) => {
    const foods = await apiSearchRecipes(radio, input);
    setFoodRecipes(foods);
  };

  // const getIngredients = async (radio, input) => {
  //   const ingredients = await apiSearchRecipes(radio, input);
  //   setIngredientsList(ingredients);
  // };

  const contextValue = {
    getDrinks,
    getFoods,
    // getIngredients,
    drinkRecipes,
    foodRecipes,
    ingredientsList,
    ingredientsImgs,
    recipes,
    categories,
    filterByCategory,
    setRecipes,
    setLocation,
    setFilterByCategory,
    setIngredientsList,
    setIngredientsImgs,
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
