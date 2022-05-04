// const getUrlFoods = (type, name) => {
//   switch (type) {
//   case 'image':
//     return `www.themealdb.com/images/ingredients/${name}-Small.png`;
//   default:
//     return 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
//   }
// };

export const fetchFoodsIngredients = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(URL);
  const result = await response.json();
  console.log(result);
  return result.meals;
};

export const fetchFoodsImages = (name) => {
  const src = `https://www.themealdb.com/images/ingredients/${name}-Small.png`;
  return src;
};

// const getUrlDrinks = (type, name) => {
//   switch (type) {
//   case 'image':
//     return `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;
//   default:
//     return 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
//   }
// };

export const fetchDrinksIngredients = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(URL);
  const result = await response.json();
  console.log(result);
  return result.drinks;
};

export const fetchDrinksImages = (name) => {
  const URL = `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;
  return URL;
};
