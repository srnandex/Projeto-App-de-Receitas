import React from 'react';
import { Link } from 'react-router-dom';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import Footer from '../components/Footer';

function ExploreFoods() {
  return (
    <main>
      <HeaderWithoutSearch titlePage="Explore Foods" />
      <section className="explore-main">
        <Link to="/explore/foods/ingredients">
          <button
            className=""
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>

        <Link to="/explore/foods/nationalities">
          <button
            className=""
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>

        <Link to="/foods/{id-da-receita}">
          <button
            className=""
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}

export default ExploreFoods;
