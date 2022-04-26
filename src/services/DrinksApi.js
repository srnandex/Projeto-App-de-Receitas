const getUrl = (type, category) => {
  switch (type) {
  case 'category':
    return 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  case 'filter':
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  default:
    return 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  }
};

const fetchDrinks = async (type, category) => {
  const URL = getUrl(type, category);
  const response = await fetch(URL);
  const result = await response.json();
  return result.drinks;
};

export default fetchDrinks;
