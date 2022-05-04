import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FiltersWaraper from '../components/FiltersWaraper';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipescard from '../components/RecipesCard';
import RecipesContext from '../context/RecipesContext';
import style from '../CSS/MainPage.module.css';

const Mainpage = () => {
  const { pathname } = useLocation();
  const { setLocation, recipes, filterByCategory } = useContext(RecipesContext);

  useEffect(() => {
    setLocation(pathname);
  });

  const filteredRecipes = filterByCategory || recipes;
  return (
    <div>
      {/* teste */}
      <Header titlePage="Foods" />
      <FiltersWaraper pathName={ pathname } />
      {
        pathname === '/foods'
          ? (
            <div className={ style.card_container }>
              {filteredRecipes.map(({ strMealThumb, strMeal, idMeal }, i) => {
                const CARD_LIMIT = 12;
                if (i < CARD_LIMIT) {
                  return (
                    <Link
                      to={ `/foods/${idMeal}` }
                      key={ strMeal }
                      className={ style.card }
                    >
                      <Recipescard
                        src={ strMealThumb }
                        name={ strMeal }
                        cardId={ `${i}-recipe-card` }
                        imgId={ `${i}-card-img` }
                        nameId={ `${i}-card-name` }
                        className={ style.card }
                      />
                    </Link>);
                }
                return null;
              })}
            </div>)
          : (
            <div className={ style.card_container }>
              {filteredRecipes.map(({ strDrinkThumb, strDrink, idDrink }, i) => {
                const CARD_LIMIT = 12;
                if (i < CARD_LIMIT) {
                  return (
                    <Link
                      to={ `/drinks/${idDrink}` }
                      key={ strDrink }
                      className={ style.card }
                    >
                      <Recipescard
                        src={ strDrinkThumb }
                        name={ strDrink }
                        cardId={ `${i}-recipe-card` }
                        imgId={ `${i}-card-img` }
                        nameId={ `${i}-card-name` }
                      />
                    </Link>);
                }
                return null;
              })}
            </div>)

      }
      <Footer />
    </div>
  );
};

export default Mainpage;
