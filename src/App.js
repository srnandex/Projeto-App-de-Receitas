import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Explore from './pages/Explore';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/explore" component={ Explore } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
