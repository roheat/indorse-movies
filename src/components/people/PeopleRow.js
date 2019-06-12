import React from 'react';
import { Link } from 'react-router-dom';

const PeopleRow = (props) => {
	const poster_src = `https://image.tmdb.org/t/p/w185${props.actor.profile_path}`;
	const rowBackground = props.child % 2 === 0 ? '#f8f8f8' : '#ffffff';

	return (
		<table className="people_table">
			<tbody>
				<tr style={{ background: rowBackground }}>
					<td>
						<img alt="poster" width="120" src={poster_src} />
					</td>
					<td>
						<h3>{props.actor.name}</h3>
						<Link to={props.linkTo}>
							<div className="view">
								View More
							</div>
						</Link>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default PeopleRow;