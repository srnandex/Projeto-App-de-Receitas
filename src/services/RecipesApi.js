const fetchFoods = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const result = await response.json();
  return result.meals;
};

const fetchFoodCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const result = await response.json();
  return result.meals;
};

export {
  fetchFoods,
  fetchFoodCategories,
};
