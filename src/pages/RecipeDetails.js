import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';

function Recipedetails() {
  const { pathname } = useLocation();
  const { setLocation, setRecipeId, Details } = useContext(RecipesContext);
  const { id } = useParams();

  useEffect(() => {
    setLocation(pathname);
    setRecipeId(id);
  });

  const getIngredients = (str) => {
    if (Object.keys(Details).length > 0) {
      const keys = Object.keys(Details).filter((key) => key.includes(str));
      const ingredientsList = keys.map((key) => {
        if (Details[key] !== null) return Details[key];

        return '';
      });
      const nullIndex = ingredientsList.indexOf('');

      return ingredientsList.slice(0, nullIndex);
    }
    return [];
  };

  const renderFood = () => {
    const { strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = Details;
    return (
      <div>
        <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">{strMeal}</h1>
        <p data-testid="recipe-category">{strCategory}</p>
        <h2>Ingredients</h2>
        <ul>
          {getIngredients('strIngredient').map((ing, i) => {
            const measure = getIngredients('strMeasure')[i];
            return (
              <li key={ ing } data-testid={ `${i}-ingredient-name-and-measure` }>
                {`${ing} - ${measure}`}
              </li>
            );
          })}
        </ul>
        <h2>Instructions</h2>
        <p data-testid="instructions">{strInstructions}</p>
        <h2>Video</h2>
        {strYoutube && <Video url={ strYoutube } />}
        {' '}
      </div>
    );
  };

  return pathname.includes('foods') ? renderFood() : renderDrink();
}

export default Recipedetails;
