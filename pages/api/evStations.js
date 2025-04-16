export default async function handler(req, res) {
	const { location = "Toronto, ON, Canada", limit = 20 } = req.query;

	const url = `https://ev-charge-finder.p.rapidapi.com/search-by-location?near=${encodeURIComponent(
		location)}&limit=${limit}`;
	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
			"x-rapidapi-key": process.env.RAPIDAPI_KEY,
		},
	};

	try {
		const response = await fetch(url, options);
		const stations = await response.json();
		res.status(200).json({ location, stations });
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch EV stations" });
	}
}
