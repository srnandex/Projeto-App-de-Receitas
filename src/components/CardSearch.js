import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../CSS/CardSearch.css';

function CardSearch() {
  const { foodRecipes, drinkRecipes } = useContext(RecipesContext);
  console.log(foodRecipes);
  return (
    <section>
      {foodRecipes.map((even, index) => (
        <Link key={ index } to={ `/foods/${even.idMeal}` }>
          <div className="card-search" data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ even.strMealThumb }
              alt={ even.strMeal }
            />
            <h3 data-testid={ `${index}-card-name` }>{ even.strMeal }</h3>
          </div>
        </Link>
      ))}
      {drinkRecipes.map((even, index) => (
        <Link key={ index } to={ `/drinks/${even.idDrink}` }>
          <div className="card-search" data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ even.strDrinkThumb }
              alt={ even.strDrink }
            />
            <h3 data-testid={ `${index}-card-name` }>{ even.strDrink }</h3>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CardSearch;
