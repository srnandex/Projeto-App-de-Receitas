const igredienteUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const nomeUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const fisrtLetterUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const apiSearchDrink = async (radio, input) => {
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
  const { drinks } = await response.json();
  if (drinks === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return [];
  }
  const magicNumber = 12;
  if (drinks.length > magicNumber) {
    return drinks.slice(0, magicNumber);
  }
  return drinks;
};

export default apiSearchDrink;
