import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FiltersWaraper from '../components/FiltersWaraper';
import Recipescard from '../components/RecipesCard';
import RecipesContext from '../context/RecipesContext';

const Mainpage = () => {
  const { pathname } = useLocation();
  const { setLocation, recipes, filterByCategory } = useContext(RecipesContext);

  useEffect(() => {
    setLocation(pathname);
  });

  const filteredRecipes = filterByCategory || recipes;
  return (
    <div>
      <FiltersWaraper pathName={ pathname } />
      {
        pathname === '/foods'
          ? filteredRecipes.map(({ strMealThumb, strMeal }, i) => {
            const CARD_LIMIT = 12;
            if (i < CARD_LIMIT) {
              return (
                <Recipescard
                  src={ strMealThumb }
                  name={ strMeal }
                  key={ strMeal }
                  data-testid={ `${i}-recipe-card` }
                  imgId={ `${i}-card-img` }
                  nameId={ `${i}-card-name` }
                />);
            }
            return null;
          })
          : filteredRecipes.map(({ strDrinkThumb, strDrink }, i) => {
            const CARD_LIMIT = 12;
            if (i < CARD_LIMIT) {
              return (
                <Recipescard
                  src={ strDrinkThumb }
                  name={ strDrink }
                  key={ strDrink }
                  data-testid={ `${i}-recipe-card` }
                  imgId={ `${i}-card-img` }
                  nameId={ `${i}-card-name` }
                />);
            }
            return null;
          })
      }
    </div>
  );
};

export default Mainpage;
