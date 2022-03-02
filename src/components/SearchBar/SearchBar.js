import React from 'react'
import './SearchBar.css'

const sortByOptions = {
	best_match: 'Best Match',
	rating: 'Highest Rated',
	review_count: 'Most Reviewed',
}

class SearchBar extends React.Component {
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOptionKey => {
			return <li key={sortByOptionKey}>{sortByOptions[sortByOptionKey]}</li>
		})
	}
	render() {
		return (
			<div className='SearchBar'>
				<div className='SearchBar-sort-options'>
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className='SearchBar-fields'>
					<input placeholder='Search Businesses' />
					<input placeholder='Where?' />
				</div>
				<div className='SearchBar-submit'>
					<a>Let's Go</a>
				</div>
			</div>
		)
	}
}

export default SearchBar
