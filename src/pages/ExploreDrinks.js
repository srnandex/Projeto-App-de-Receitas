import React from 'react';
import { Link } from 'react-router-dom';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import Footer from '../components/Footer';

function ExploreDrinks() {
  return (
    <main>
      <HeaderWithoutSearch titlePage="Explore Drinks" />
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
