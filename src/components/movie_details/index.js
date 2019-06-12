import React from 'react';
import axios from 'axios';
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
		credits: [],
		loading: true
	}
	async componentDidMount() {
		const id = this.props.match.params.id;
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
		);

		const { data: credits } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
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
			credits: credits.cast.slice(0, 5),
			loading: false
		});
	}
	
	getCasts = credits => {
		return credits.map(credit => {
			return (
				<div key={credit.id}>
					<p>{credit.name}</p>
				</div>
			);
		})
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
			credits,
			loading
		} = this.state;

		return (
			<div className="container">
				<div className="back_btn" onClick={() => this.props.history.goBack()}>
					<i className="material-icons">keyboard_backspace</i>
					Back
				</div>
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
										<div className="extra">
											<div className="facts">
												<h2>Facts</h2>
												<p><strong>Runtime:</strong> {runtime} min</p>
												<p><strong>Budget:</strong> ${budget}</p>
												<p><strong>Revenue:</strong> ${revenue}</p>
											</div>
											<div className="credits">
												<h2>Cast</h2>
												{this.getCasts(credits)}
											</div>
										</div>
											
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