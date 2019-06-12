import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

class PeopleDetails extends React.Component {
	
	state = {
		profile: '',
		name: '',
		biography: '',
		birthday: '',
		place_of_birth: '',
		known_for_department: '',
		loading: true
	}
	async componentDidMount() {
		const id = this.props.match.params.id;
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}`
		);

		const profile = `https://image.tmdb.org/t/p/w500${data.profile_path}`;
		this.setState({
			profile,
			name: data.name,
			biography: data.biography,
			birthday: data.birthday,
			place_of_birth: data.place_of_birth,
			known_for_department: data.known_for_department,
			loading: false
		});
	}
	
	render() {
		const {
			profile,
			name,
			biography,
			birthday,
			place_of_birth,
			known_for_department,
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
										<img alt="poster" width="300" src={profile} />
									</td>
									<td>
										<h1>{name}</h1>
										<p>{biography}</p>
										<h2>Facts</h2>
										<p><strong>Birthday:</strong> {birthday} </p>
										<p><strong>Place of Birth:</strong> {place_of_birth}</p>
										<p><strong>Known for:</strong> {known_for_department}</p>
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

export default PeopleDetails;