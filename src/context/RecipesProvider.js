import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods, apiSearchRecipes } from '../services/RecipesApi';
import { fetchDrinks, apiSearchDrink } from '../services/DrinksApi';
import { fetchFoodsIngredients, fetchDrinksIngredients }
from '../services/IngredientsApi';
import { getRandomDrink, getRandomFood } from '../services/RandomRecipes';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState('');
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsImgs, setIngredientsImgs] = useState([]);
  const [RecipeId, setRecipeId] = useState('');
  const [Details, setDetails] = useState({});
  const [Recomendation, setRecomendation] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [useCardSearch, setUseCardSearch] = useState(false);
  const history = useHistory();

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

  const getFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    if (favorites.some(({ id: favId }) => favId === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  const checkStorage = (id) => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    if (doneRecipes.some(({ id: doneId }) => doneId === id)) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
    const cocktails = inProgressRecipes.cocktails ? Object
      .keys(inProgressRecipes.cocktails).includes(id) : false;
    const meals = inProgressRecipes.meals ? Object
      .keys(inProgressRecipes.meals).includes(id) : false;

    if (cocktails || meals) {
      setInProgress(true);
    } else {
      setInProgress(false);
    }

    getFavorite(id);
  };

  const redirectRandomFood = async () => {
    const idRecipeFood = await getRandomFood();
    history.push(`/foods/${idRecipeFood}`);
  };

  const redirectRandomDrink = async () => {
    const iecipeDrink = await getRandomDrink();
    history.push(`/drinks/${iecipeDrink}`);
  };

  const contextValue = {
    drinkRecipes,
    foodRecipes,
    ingredientsList,
    ingredientsImgs,
    recipes,
    categories,
    filterByCategory,
    Details,
    Recomendation,
    isDone,
    inProgress,
    isFavorite,
    getDrinks,
    getFoods,
    setRecipes,
    setLocation,
    setFilterByCategory,
    setIngredientsList,
    setIngredientsImgs,
    setRecipeId,
    checkStorage,
    getFavorite,
    setIsFavorite,
    useCardSearch,
    setUseCardSearch,
    redirectRandomFood,
    redirectRandomDrink,
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
