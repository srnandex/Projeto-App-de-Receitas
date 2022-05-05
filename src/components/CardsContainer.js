import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipescard from './RecipesCard';
import style from '../CSS/CardsContainer.module.css';

export default function CardsContainer({ rote, recipes, limit, testId, nameId }) {
  if (rote === '/foods' || rote.includes('drinks/')) {
    const id = rote.includes('drinks/')
      ? '-recomendation-title' : '-card-name';
    return (
      <>
        {recipes.map(({ strMealThumb, strMeal, idMeal }, i) => {
          if (!strMealThumb && !idMeal) return null;
          if (i < limit) {
            let clas = '';
            if (i > 1 && rote.includes('drinks/')) clas = 'hide';

            return (
              <Link
                to={ `/foods/${idMeal}` }
                key={ strMeal + i }
                className={ `${style.card} ${clas}` }
                data-testid={ `${i}${testId}` }
              >
                <Recipescard
                  src={ strMealThumb }
                  nameId={ `${i}${id}` }
                  name={ strMeal }
                  imgId={ `${i}-card-img` }
                />
              </Link>);
          }
          return null;
        })}
      </>);
  }
  if (rote === '/drinks' || rote.includes('foods/')) {
    return (
      <>
        {recipes.map(({ strDrinkThumb, strDrink, idDrink }, i) => {
          if (i < parseFloat(limit)) {
            let clas = '';
            if (i > 1 && rote.includes('foods/')) clas = 'hide';
            return (
              <Link
                to={ `/drinks/${idDrink}` }
                key={ strDrink }
                className={ `${style.card} ${clas}` }
                data-testid={ `${i}${testId}` }
              >
                <Recipescard
                  src={ strDrinkThumb }
                  name={ strDrink }
                  nameId={ `${i}${nameId}` }
                  imgId={ `${i}-card-img` }
                />
              </Link>);
          }
          return null;
        })}
      </>);
  }
}
CardsContainer.propTypes = {
  rote: PropTypes.string,
  recipes: PropTypes.arrayOf(),
  limit: PropTypes.string,
}.isRequired;
