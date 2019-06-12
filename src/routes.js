import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MoviesHome from './components/home';
import MovieDetails from './components/movie_details';
import Layout from './components/hoc/Layout';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact component={MoviesHome} />
				<Route path='/movie/:id' component={MovieDetails} />
			</Switch>
		</Layout>	
	);
};

export default Routes;