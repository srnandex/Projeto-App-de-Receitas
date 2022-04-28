import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import CardsContainer from '../components/CardsContainer';
import FiltersWaraper from '../components/FiltersWaraper';
import RecipesContext from '../context/RecipesContext';

function Mainpage() {
  const { pathname } = useLocation();
  const { setLocation, recipes, filterByCategory } = useContext(RecipesContext);

  useEffect(() => {
    setLocation(pathname);
  });

  const filteredRecipes = filterByCategory || recipes;
  return (
    <div>
      <FiltersWaraper pathName={ pathname } />
      {pathname === '/foods' ? (
        <CardsContainer
          recipes={ filteredRecipes }
          rote={ pathname }
          limit="12"
          testId="-recipe-card"
        />
      ) : (
        <CardsContainer
          recipes={ filteredRecipes }
          rote={ pathname }
          limit="12"
          testId="-recipe-card"
        />
      )}
    </div>
  );
}

export default Mainpage;
