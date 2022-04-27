const igredienteUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const nomeUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const fisrtLetterUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

const apiSearchRecipes = async (radio, input) => {
  let url = '';
  switch (radio) {
  case 'Ingredient':
    url = igredienteUrl + input;
    break;
  case 'Name':
    url = nomeUrl + input;
    break;
  default:
    url = fisrtLetterUrl + input;
  }
  const response = await fetch(url);
  const { meals } = await response.json();
  if (meals === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return [];
  }
  const magicNumber = 12;
  if (meals.length > magicNumber) {
    return meals.slice(0, magicNumber);
  }
  return meals;
};

export default apiSearchRecipes;
