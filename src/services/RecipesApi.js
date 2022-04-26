const getUrl = (type, category) => {
  switch (type) {
  case 'category':
    return 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  case 'filter':
    return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  default:
    return 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  }
};

const fetchFoods = async (type, category) => {
  const URL = getUrl(type, category);
  const response = await fetch(URL);
  const result = await response.json();
  return result.meals;
};

export default fetchFoods;
