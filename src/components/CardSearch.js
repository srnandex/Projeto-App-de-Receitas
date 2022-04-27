import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function CardSearch() {
  const { foodRecipes, drinkRecipes } = useContext(RecipesContext);
  return (
    <section>
      {foodRecipes.map((even, index) => (
        <div id={ even.idMeal } data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            data-testid={ `${index}-card-img` }
            src={ even.strMealThumb }
            alt={ even.strMeal }
          />
          <h3 data-testid={ `${index}-card-name` }>{ even.strMeal }</h3>
        </div>
      ))}
      {drinkRecipes.map((even, index) => (
        <div id={ even.idDrink } data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            data-testid={ `${index}-card-img` }
            src={ even.strDrinkThumb }
            alt={ even.strDrink }
          />
          <h3 data-testid={ `${index}-card-name` }>{ even.strDrink }</h3>
        </div>
      ))}
    </section>
  );
}

export default CardSearch;
