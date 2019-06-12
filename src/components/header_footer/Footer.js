import React from 'react';
import { MovieDBLogo } from '../ui/icons';

class Footer extends React.Component {
	render() {
		return (
			<footer className="bck_footer">
				<div className="footer_logo">
					<MovieDBLogo
						link={true}
						linkTo="/"
						width="80px"
						height="70px"
					/>
				</div>
				<div className="footer_disclaimer">
					TheMovieDB. All Rights Reserved.
				</div>
				<div className="footer_credits">
					Created with <div className="heart"></div> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/roheat/indorse-movies">roheat</a>.
				</div>
			</footer>
		);
	}
}

export default Footer;