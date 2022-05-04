import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
// import CardsContainer from '../components/CardsContainer';

function ExploreByNatinalities() {
  const { pathname } = useLocation();
  const { setLocation,
    countries,
    recipes, filterByNationality,
  } = useContext(RecipesContext);

  const [optionSelected, setOptionSelected] = useState('');

  useEffect(() => {
    setLocation(pathname);
  }, [pathname, setLocation]);

  const handleSelected = async ({ target }) => {
    setOptionSelected(target.value);
    // recipes.map(({ strArea }) => strArea === target.value);
  };

  const filteredRecipes = filterByNationality || recipes;

  return (
    <main>
      <Header />
      <nav className="explore-main">
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ (e) => handleSelected(e.target) }
        >
          <option value="">All</option>
          {countries.map(({ strArea }) => (

            <option
              key={ strArea }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              {strArea}

            </option>

          ))}
        </select>
      </nav>
      <section>
        {filteredRecipes
          .filter(({ strArea }) => (
            strArea === optionSelected
          ))
          .map((recipe, index) => (
            <Link key={ index } to={ `/foods/${recipe.idMeal}` }>
              <div className="card-search" data-testid={ `${index}-recipe-card` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strMealThumb }
                  alt={ recipe.strMeal }
                />
                <h3 data-testid={ `${index}-card-name` }>{ recipe.strMeal }</h3>
              </div>
            </Link>
          ))}
      </section>
      <Footer />
    </main>
  );
}

export default ExploreByNatinalities;
