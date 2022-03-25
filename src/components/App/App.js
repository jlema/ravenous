import React from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			businesses: [],
		}
		this.searchYelp = this.searchYelp.bind(this)
	}

	async searchYelp(term, location, sortBy) {
		const url = `/.netlify/functions/yelp?term=${term}&location=${location}&sortBy=${sortBy}`
		await fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					businesses: data.businesses,
				})
			})
	}

	render() {
		return (
			<div className='App'>
				<h1>ravenous</h1>
				<SearchBar searchYelp={this.searchYelp} />
				<BusinessList businesses={this.state.businesses} />
			</div>
		)
	}
}

export default App
