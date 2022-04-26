import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Recipescard from '../components/RecipesCard';
import RecipesContext from '../context/RecipesContext';
// import fetchFoods from '../services/RecipesApi';

const Mainpage = () => {
  const { pathname } = useLocation();
  const { setLocation, recipes } = useContext(RecipesContext);

  useEffect(() => {
    setLocation(pathname);
  });

  return (
    <div>
      {
        pathname === '/foods'
          ? recipes.map(({ strMealThumb, strMeal }, i) => {
            const CARD_LIMIT = 12;
            if (i < CARD_LIMIT) {
              return (
                <Recipescard
                  src={ strMealThumb }
                  name={ strMeal }
                  key={ strMeal }
                />);
            }
            return null;
          })
          : recipes.map(({ strDrinkThumb, strDrink }) => (
            <Recipescard
              src={ strDrinkThumb }
              name={ strDrink }
              key={ strDrink }
            />))
      }
    </div>
  );
};

export default Mainpage;
