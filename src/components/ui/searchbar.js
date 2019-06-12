import React from 'react';

const SearchBar = (props) => {
	return (
		<div className="searchbar">
			<input 
				placeholder="Enter a movie name"
			/>
			<i class="material-icons">search</i>
		</div>
	);
};

export default SearchBar;