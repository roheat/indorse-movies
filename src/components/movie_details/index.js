import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

class MovieDetails extends React.Component {
	
	state = {
		poster: '',
		title: '',
		overview: '',
		releaseYear: '',
		runtime: '',
		budget: '',
		revenue: '',
		rating: '',
		loading: true
	}
	async componentDidMount() {
		const id = this.props.match.params.id;
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
		);

		const poster = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
		this.setState({
			poster,
			title: data.title,
			overview: data.overview,
			releaseYear: data.release_date.slice(0, 4),
			runtime: data.runtime,
			budget: data.budget,
			revenue: data.revenue,
			rating: data.vote_average,
			loading: false
		});
	}
	
	render() {
		const {
			poster,
			title,
			overview,
			releaseYear,
			runtime,
			budget,
			revenue,
			rating,
			loading
		} = this.state;

		return (
			<div className="container">
				<Link to="/">
					<div className="back_btn">
						<i class="material-icons">keyboard_backspace</i>
						Back
					</div>
				</Link>
				{
					!loading ?
						<table className="movie_show">
							<tbody>
								<tr>
									<td>
										<img alt="poster" width="300" src={poster} />
									</td>
									<td>
										<h1>{title} ({releaseYear})</h1>
										<h3>Score : {rating}</h3>
										<p>{overview}</p>
										<h2>Facts</h2>
										<p><strong>Runtime:</strong> {runtime} min</p>
										<p><strong>Budget:</strong> ${budget}</p>
										<p><strong>Revenue:</strong> ${revenue}</p>
									</td>
								</tr>
							</tbody>
						</table>
					: 
					<div className="progress">
						<CircularProgress thickness={7} style={{ color: '#01D277' }} />
					</div>
				}
			</div>
		);
	}
};

export default MovieDetails;