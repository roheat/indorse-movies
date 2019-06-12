import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MoviesHome from './components/home';
import Layout from './components/hoc/Layout';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact component={MoviesHome} />
			</Switch>
		</Layout>	
	);
};

export default Routes;