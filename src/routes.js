import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MoviesList from './components/MoviesList';
import Layout from './components/hoc/Layout';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact component={MoviesList} />
			</Switch>
		</Layout>	
	);
};

export default Routes;