import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/hoc/Layout';
import MoviesHome from './components/home';
import MovieDetails from './components/movie_details';
import PopularMovies from './components/popular_movies';
import TrendingMovies from './components/trending_movies';
import PeopleView from './components/people';
import PeopleDetails from './components/people_details';
import ScrollToTop from './components/ui/scroll_to_top';

const Routes = () => {
	return (
		<ScrollToTop>
			<Layout>
				<Switch>
					<Route path='/' exact component={MoviesHome} />
					<Route path='/movie/popular' exact component={PopularMovies} />
					<Route path='/movie/trending' exact component={TrendingMovies} />
					<Route path='/movie/:id' component={MovieDetails} />
					<Route path='/people' exact component={PeopleView} />
					<Route path='/people/:id' component={PeopleDetails} />
				</Switch>
			</Layout>
		</ScrollToTop>
	);
};

export default Routes;