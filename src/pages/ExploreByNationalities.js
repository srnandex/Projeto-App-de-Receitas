import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
// import CardsContainer from '../components/CardsContainer';

function ExploreByNatinalities() {
  const { pathname } = useLocation();
  const { setLocation,
    countries,
    // recipes, filterByNationality
  } = useContext(RecipesContext);

  useEffect(() => {
    setLocation(pathname);
  }, [pathname, setLocation]);

  // const filteredRecipes = filterByNationality || recipes;

  return (
    <main>
      <nav className="explore-main">
        <select data-testid="explore-by-nationality-dropdown">
          {countries.map(({ strArea }) => (
            <option key={ strArea } data-testid={ `${strArea}-option` }>{strArea}</option>
          ))}
        </select>
      </nav>
      <Footer />
    </main>
  );
}

export default ExploreByNatinalities;
