import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Characters from './Characters/Characters';
import OpeningCrawl from './OpeningCrawl/OpeningCrawl';
import Planets from './Planets/Planets';
import Home from './Home/Home';
import NotFound from './NotFound';
import Landing from './Landing/Landing';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}>
        {' '}
      </Route>
      <Route exact path="/home" component={Home}>
        {' '}
      </Route>
      <Route exact path="/characters" component={Characters}>
        {' '}
      </Route>
      <Route exact path="/planets" component={Planets}>
        {' '}
      </Route>
      <Route exact path="/openingcrawls" component={OpeningCrawl}>
        {' '}
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
