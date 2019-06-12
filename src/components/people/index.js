import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import PeopleRow from './PeopleRow';

class PeopleView extends React.Component {
	state = {
		actors: [],
		loading: true
	}

	async componentDidMount() {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}`
		);

		this.setState({ actors: data.results, loading: false }); 
	}

	renderMovieRows = (actors) => {

		return actors.map((actor, i) => (
			<PeopleRow
				actor={actor} 
				key={actor.id} 
				child={i}
				linkTo={`/people/${actor.id}`} 
			/>
		))
	}

	render() {
		console.log(this.state.actors)
		return (
			<div className="container">
				<h1 style={{ marginTop: '150px' }}>Most Popular Actors and Actresses</h1>
				{
					!this.state.loading ? 
					this.renderMovieRows(this.state.actors)
					:
					<div className="progress">
						<CircularProgress thickness={7} style={{ color: '#01D277' }}/>
					</div>
				}
			</div>
		);
	}
}

export default PeopleView;