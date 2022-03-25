const fetch = require('node-fetch')

exports.handler = async (event, context) => {
	// console.log(event)
	// console.log(context)
	try {
		const { term, location, sortBy } = event.queryStringParameters
		// Note: for development, https://cors-anywhere.herokuapp.com/ may 
		// need to be added to the API call below to fix possible CORS issues
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
					'X-Requested-With': 'XMLHttpRequest',
				},
			}
		)
		// console.log(response)
		const jsonResponse = await response.json()
		// console.log(jsonResponse)
		if (jsonResponse.businesses) {
			const businesses = jsonResponse.businesses.map(business => {
				return {
					id: business.id,
					imageSrc: business.image_url,
					name: business.name,
					address:
						business.location.address1 +
						business.location.address2 +
						business.location.address3,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zip_code,
					category: business.categories[0].title,
					rating: business.rating,
					reviewCount: business.review_count,
				}
			})
			return {
				statusCode: 200,
				body: JSON.stringify({ businesses: businesses }),
			}
		}
	} catch (err) {
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message,
			}),
		}
	}
}
