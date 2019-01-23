import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Characters from './Characters/Characters'
import OpeningCrawl from './OpeningCrawl/OpeningCrawl'
import Planets from './Planets/Planets'
import App from './App'
import NotFound from './NotFound'
import Landing from './Landing/Landing'


const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Landing}> </Route>
			<Route exact path="/starwars" component={App}> </Route>
			<Route exact path="/starwars/characters" component={Characters}> </Route>
			<Route exact path="/starwars/planets" component={Planets}> </Route>
			<Route exact path="/starwars/openingcrawls" component={OpeningCrawl}> </Route>
			<Route component={NotFound}> </Route>
		</Switch>
	</BrowserRouter>
);
export default Router