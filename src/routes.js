import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/hoc/Layout';
import MoviesHome from './components/home';
import MovieDetails from './components/movie_details';
import PopularMovies from './components/popular_movies';


const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact component={MoviesHome} />
				<Route path='/movie/popular' exact component={PopularMovies} />
				<Route path='/movie/:id' component={MovieDetails} />
			</Switch>
		</Layout>	
	);
};

export default Routes;