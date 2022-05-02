import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import './App.css';
import Login from './pages/Login';
import Mainpage from './pages/MainPage';
import RecipeDetails from './pages/RecipeDetails';
import Explore from './pages/Explore';
import DoneRecipes from './pages/DoneRecipes';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Mainpage } />
        <Route exact path="/drinks" component={ Mainpage } />
        <Route exact path="/foods/:id" component={ RecipeDetails } />
        <Route exact path="/drinks/:id" component={ RecipeDetails } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
