import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
