import React from 'react';
import SearchBar from '../ui/searchbar';
import axios from 'axios';
import MovieRow from './MovieRow';

class MoviesHome extends React.Component {
	
	state = {
		movies: [],
		searchTerm: ''
	}

	renderMovieRows = (movies) => {

		return movies.map((movie, i) => (
			<MovieRow 
				movie={movie} 
				key={movie.id} 
				child={i}
				linkTo={`/movies/${movie.id}`} 
			/>
		))
	}

	performSearch = async (searchTerm) => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
		);

		this.setState({ movies: data.results });
	}

	searchMovies = (e) => {
		const searchTerm = e.target.value;
		this.setState({ searchTerm });
		this.performSearch(searchTerm);
	}

	render() {
		const { movies, searchTerm } = this.state;
		return (
			<div className="container">
				<SearchBar
					value={searchTerm}
					onChange={(e) => this.searchMovies(e)}
				/>
				{
					searchTerm ?
						movies.length ? 
						this.renderMovieRows(movies)
						:<h3 className="search_prompt">No movies found!</h3>
					: <h3 className="search_prompt">Search for a movie!</h3>
				}
			</div>
		);
	}
}

export default MoviesHome;