import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieRow from '../ui/movie_row';

class TrendingMovies extends React.Component {
	state = {
		movies: [],
		loading: true
	}

	async componentDidMount() {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
		);

		this.setState({ movies: data.results, loading: false }); 
	}

	renderMovieRows = (movies) => {

		return movies.map((movie, i) => (
			<MovieRow 
				movie={movie} 
				key={movie.id} 
				child={i}
				linkTo={`/movie/${movie.id}`} 
			/>
		))
	}

	render() {
		return (
			<div className="container">
				<h1 style={{ marginTop: '150px' }}>Trending Movies</h1>
				{
					!this.state.loading ? 
					this.renderMovieRows(this.state.movies)
					:
					<div className="progress">
						<CircularProgress thickness={7} style={{ color: '#01D277' }}/>
					</div>
				}
			</div>
		);
	}
}

export default TrendingMovies;