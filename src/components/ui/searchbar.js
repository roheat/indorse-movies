import React from 'react';

const SearchBar = (props) => {
	return (
		<div className="searchbar">
			<input
				value={props.value}
				onChange={props.onChange}
				placeholder="Enter a movie name"
			/>
			<i className="material-icons">search</i>
		</div>
	);
};

export default SearchBar;