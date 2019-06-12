import React from 'react';
import SearchBar from '../ui/searchbar';

class MoviesHome extends React.Component {
	render() {
		return (
			<div className="container">
				<SearchBar />
			</div>
		);
	}
}

export default MoviesHome;