import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import CardsContainer from '../components/CardsContainer';
import FiltersWaraper from '../components/FiltersWaraper';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import style from '../CSS/MainPage.module.css';

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
        <div className={ style.card_container }>
          <CardsContainer
            recipes={ filteredRecipes }
            rote={ pathname }
            limit="12"
            testId="-recipe-card"
          />
          <Footer />
        </div>
      ) : (
        <div className={ style.card_container }>
          <CardsContainer
            recipes={ filteredRecipes }
            rote={ pathname }
            limit="12"
            testId="-recipe-card"
            nameId="-card-name"
          />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Mainpage;
