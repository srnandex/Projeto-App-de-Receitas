import React from 'react';
import PropTypes from 'prop-types';
import DrinksApi from '../services/DrinksApi';
import RecipesApi from '../services/RecipesApi';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [foodRecipes, setFoodRecipes] = useState([]);

  const getDrinks = async (radio, input) => {
    const drinks = await DrinksApi(radio, input);
    setDrinkRecipes(drinks);
  };
  const getFoods = async (radio, input) => {
    const foods = await RecipesApi(radio, input);
    setFoodRecipes(foods);
  };

  const contextValue = {
    getDrinks,
    getFoods,
    drinkRecipes,
    foodRecipes,
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
