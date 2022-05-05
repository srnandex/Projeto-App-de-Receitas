import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import IngredientsCard from './IngredientsCard';
import { fetchFoodsIngredients,
  fetchFoodsImages, fetchFoodsListByIngredient } from '../services/IngredientsApi';

function ExploreFoodIngredients() {
  const { ingredientsList,
    // filterByIngredient,
    setFilterbyIngredient } = useContext(RecipesContext);

  useEffect(() => {
    const getIngredients = async () => {
      const mealObj = (await fetchFoodsIngredients());
      const { strIngredient } = mealObj;
      setFilterbyIngredient(strIngredient);
    };
    getIngredients();
  });

  const fetchIngredientsData = async (ingredient) => {
    const getData = await fetchFoodsListByIngredient(ingredient);
    const filteredCards = setFilterbyIngredient(getData);
    return filteredCards;
  };

  return (
    <section>
      {ingredientsList.map(({ idIngredient, strIngredient }, index) => {
        const CARD_LIMIT = 12;
        if (index < CARD_LIMIT) {
          return (
            <Link
              to="/foods"
              key={ idIngredient }
              onClick={ () => fetchIngredientsData(strIngredient) }
            >
              <IngredientsCard
                name={ strIngredient }
                index={ index }
                src={ fetchFoodsImages(strIngredient) }
              />
            </Link>
          );
        }
        return null;
      })}
    </section>
  );
}

export default ExploreFoodIngredients;
