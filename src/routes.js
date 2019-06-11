import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MoviesList from './components/MoviesList';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={MoviesList} />
		</Switch>
	);
};

export default Routes;