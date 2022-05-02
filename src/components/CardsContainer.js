import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipescard from './RecipesCard';
import style from '../CSS/CardsContainer.module.css';

export default function CardsContainer({ rote, recipes, limit, testId }) {
  if (rote === '/foods' || rote.includes('drinks/')) {
    return (
      <>
        {recipes.map(({ strMealThumb, strMeal, idMeal }, i) => {
          if (!strMealThumb && !idMeal) return null;
          if (i < limit) {
            return (
              <Link
                to={ `/foods/${idMeal}` }
                key={ strMeal + i }
                className={ style.card }
              >
                <Recipescard
                  src={ strMealThumb }
                  name={ strMeal }
                  cardId={ `${i}${testId}` }
                  imgId={ `${i}-card-img` }
                  nameId={ `${i}-card-name` }
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
            return (
              <Link
                to={ `/drinks/${idDrink}` }
                key={ strDrink }
                className={ style.card }
              >
                <Recipescard
                  src={ strDrinkThumb }
                  name={ strDrink }
                  cardId={ `${i}${testId}` }
                  imgId={ `${i}-card-img` }
                  nameId={ `${i}-card-name` }
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
