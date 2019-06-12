import React from 'react';
import { Link } from 'react-router-dom';

const MovieRow = (props) => {
	const poster_src = `https://image.tmdb.org/t/p/w185${props.movie.poster_path}`;
	const rowBackground = props.child % 2 === 0 ? '#f8f8f8' : '#ffffff';

	return (
		<table className="movie_table">
			<tbody>
				<tr style={{ background: rowBackground }}>
					<td>
						<img alt="poster" width="120" src={poster_src} />
					</td>
					<td>
						<h3>{props.movie.title}</h3>
						<p>{props.movie.overview}</p>
						<Link to={props.linkTo}>
							<div className="view">
								View Details
							</div>
						</Link>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default MovieRow;