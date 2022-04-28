import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import CardsContainer from '../components/CardsContainer';
import Video from '../components/Video';
import RecipesContext from '../context/RecipesContext';

function Recipedetails() {
  const { pathname } = useLocation();
  const { setLocation, setRecipeId, Details, Recomendation } = useContext(RecipesContext);
  const { id } = useParams();

  useEffect(() => {
    setLocation(pathname);
    setRecipeId(id);
  }, [pathname]);

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

  const mealTags = [
    'strMealThumb',
    'strMeal',
    'strCategory',
    'strInstructions',
    'strYoutube',
  ];
  const drinkTags = [
    'strDrinkThumb',
    'strDrink',
    'strCategory',
    'strInstructions',
  ];

  const renderFood = () => {
    const tags = pathname.includes('foods') ? mealTags : drinkTags;
    return (
      <div>
        <img
          src={ Details[tags[0]] }
          alt={ Details[tags[1]] }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{Details[tags[1]]}</h1>
        <p data-testid="recipe-category">{Details[tags[2]]}</p>
        <h2>Ingredients</h2>
        <ul>
          {getIngredients('strIngredient').map((ing, i) => {
            const measure = getIngredients('strMeasure')[i];
            return (
              <li
                key={ ing + measure + i }
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                {`${ing} - ${measure}`}
              </li>
            );
          })}
        </ul>
        <h2>Instructions</h2>
        <p data-testid="instructions">{Details[tags[3]]}</p>
        {tags[4] && (
          <>
            <h2>Video</h2>
            <Video url={ Details[tags[4]] } />
          </>
        )}
        <h2>Recommended</h2>
        <CardsContainer
          rote={ pathname }
          limit="6"
          recipes={ Recomendation }
          testId="-recomendation-card"
        />
      </div>
    );
  };

  return Details && renderFood();
}

export default Recipedetails;
