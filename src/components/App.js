import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FoodDetail from './FoodDetail';
import HomePage from './HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/:id' exact component={FoodDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
