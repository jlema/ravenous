import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match',
		}
		this.sortByOptions = {
			best_match: 'Best Match',
			rating: 'Highest Rated',
			review_count: 'Most Reviewed',
		}
		this.handleTermChange = this.handleTermChange.bind(this)
		this.handleLocationChange = this.handleLocationChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
	}

	getSortByClass(sortByOption) {
		if (this.state.sortBy === sortByOption) {
			return 'active'
		} else {
			return ''
		}
	}

	handleSortByChange(sortByOption) {
		this.setState({ sortBy: sortByOption })
	}

	handleTermChange(event) {
		this.setState({ term: event.target.value })
	}

	handleLocationChange(event) {
		this.setState({ location: event.target.value })
	}

	handleSearch(event) {
		this.props.searchYelp(
			this.state.term,
			this.state.location,
			this.state.sortBy
		)
		event.preventDefault()
	}

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map(sortByOptionKey => {
			const sortByOptionValue = this.sortByOptions[sortByOptionKey]
			return (
				<li
					key={sortByOptionKey}
					className={this.getSortByClass(sortByOptionKey)}
					onClick={this.handleSortByChange.bind(this, sortByOptionKey)}>
					{sortByOptionValue}
				</li>
			)
		})
	}

	render() {
		return (
			<div className='SearchBar'>
				<div className='SearchBar-sort-options'>
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className='SearchBar-fields'>
					<input
						placeholder='Search Businesses'
						onChange={this.handleTermChange}
					/>
					<input placeholder='Where?' onChange={this.handleLocationChange} />
				</div>
				<div className='SearchBar-submit'>
					<button onClick={this.handleSearch}>Let's Go</button>
				</div>
			</div>
		)
	}
}

export default SearchBar
