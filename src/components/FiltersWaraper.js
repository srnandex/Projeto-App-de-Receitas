import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

const FiltersWaraper = () => {
  const { categories } = useContext(RecipesContext);
  return (
    <div>
      { categories.map(({ strCategory }, i) => {
        const FILTER_LIMIT = 5;
        if (i < FILTER_LIMIT) {
          return (
            <button
              type="button"
              data-testid={ `${strCategory}-category-filter` }
            >
              { strCategory }
            </button>
          );
        }
        return null;
      }) }
    </div>
  );
};

export default FiltersWaraper;
