import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { MovieDBLogo } from '../ui/icons';

class Header extends React.Component {
	render() {
		return (
			<AppBar
				position="fixed"
				style={{
					backgroundColor: '#1F2823',
					boxShadow: 'none',
					padding: '10px 0',
					borderBottom: '2px solid #D10022'
				}}
			>
				<Toolbar style={{ display: 'flex'}}>
					<div style={{ flexGrow: 1}}>
						<div className="header_logo">
							<MovieDBLogo 
								link={true}
								linkTo="/"
								width="80px"
								height="70px"
							/>
						</div>
					</div>
					
					<Link to="/movies/popular">
						<Button color="inherit">Popular Movies</Button>
					</Link>
					<Link to="/movies/latest">
						<Button color="inherit">Trending Movies</Button>
					</Link>
					<Link to="/people">
						<Button color="inherit">People</Button>
					</Link>
					
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;