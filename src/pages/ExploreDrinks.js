import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

function ExploreDrinks() {
  const { redirectRandomDrink } = useContext(RecipesContext);
  return (
    <main>
      <section className="explore-main">
        <Link to="/explore/drinks/ingredients">
          <button
            className=""
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>

        <Link to="/drinks/{id-da-receita}">
          <button
            className=""
            type="button"
            data-testid="explore-surprise"
            onClick={ () => redirectRandomDrink() }
          >
            Surprise me!
          </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}

export default ExploreDrinks;
