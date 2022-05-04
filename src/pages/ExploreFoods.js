import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import { fetchFoods } from '../services/RecipesApi';

function ExploreFoods() {
  const { randomPage, setRandomPage } = useContext(RecipesContext);
  const { push } = useHistory();
  // const { pathname } = useLocation();

  useEffect(() => {
    const fetchPage = async () => {
      setRandomPage(await fetchFoods('random'));
    };
    fetchPage();
  }, []);

  const renderRandomPage = () => (
    <div>
      <img
        src={ randomPage.strMealThumb }
        alt={ randomPage.strMeal }
        data-testid="recipe-photo"
        className={ style.recipe_img }
      />
      <section className={ style.title_container }>
        <h1 data-testid="recipe-title">{randomPage.strMeal}</h1>
        {/* <div>
          <button type="button" onClick={ () => handleFavorite() }>
            <img
              src={ isFavorite ? filledHeart : emptyHeart }
              alt=""
              data-testid="favorite-btn"
            />
          </button>
          <button type="button" onClick={ handleShare } data-testid="share-btn">
            <img src={ share } alt="" />
          </button>
        </div> */}
      </section>
    </div>
  );

  return (
    <main>
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

        <button
          className=""
          type="button"
          data-testid="explore-surprise"
          onClick={ () => (push(`/foods/${id}`) && renderRandomPage()) }
        >
          Surprise me!
        </button>
      </section>
      <Footer />
    </main>
  );
}

export default ExploreFoods;
