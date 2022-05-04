import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodsImages, fetchDrinksImages }
from '../services/IngredientsApi';

function ExploreIngredients() {
  const { pathname } = useLocation();
  const { setLocation, ingredientsList } = useContext(RecipesContext);

  useEffect(() => {
    setLocation(pathname);
  }, [pathname, setLocation]);

  const newList = ingredientsList;
  return (
    <main>
      {
        pathname === '/explore/foods/ingredients'
          ? (
            <section>
              {newList.map(({ idIngredient, strIngredient }, index) => {
                const CARD_LIMIT = 12;
                if (index < CARD_LIMIT) {
                  return (
                    <Link to="/foods" key={ idIngredient }>
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
            </section>)
          : (
            <section>
              {newList.map(({ strIngredient1 }, index) => {
                const CARD_LIMIT = 12;
                if (index < CARD_LIMIT) {
                  return (
                    <Link
                      to="/drinks"
                      key={ index }
                    >

                      <IngredientsCard
                        name={ strIngredient1 }
                        index={ index }
                        src={ fetchDrinksImages(strIngredient1) }
                      />
                    </Link>
                  );
                }
                return null;
              })}
            </section>
          )
      }
      <Footer />
    </main>
  );
}

export default ExploreIngredients;
