import React from 'react';

const MovieRow = (props) => {
	const poster_src = `https://image.tmdb.org/t/p/w185${props.movie.poster_path}`;
	return (
		<table>
			<tbody>
				<tr>
					<td>
						<img alt="poster" width="120" src={poster_src} />
					</td>
					<td>
						<h3>{props.movie.title}</h3>
						<p>{props.movie.overview}</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default MovieRow;