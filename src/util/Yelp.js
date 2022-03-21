export const Yelp = {
	search: async (term, location, sortBy) => {
		const response = await fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
				},
			}
		)
		const jsonResponse = await response.json()
		if (jsonResponse.businesses) {
			return jsonResponse.businesses.map(business => {
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
		}
	},
}
