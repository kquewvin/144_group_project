import { useState } from "react";

export default function EvStationFinder() {
	const [stations, setStations] = useState([]);
	const [location, setLocation] = useState("Toronto, ON, Canada");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch(`/api/evStations?location=${encodeURIComponent(location)}&limit=20`);
			const { stations } = await res.json();
      console.log(stations); // data structure
			setStations(stations);
			setError(null);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<h1>Find EV Charging Stations</h1>

			{/* Location Search Form */}
			<form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
				<input
					type='text'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					placeholder='Enter a location'
					required
					style={{ padding: "8px", width: "300px" }}
				/>
				<button type='submit' disabled={loading} style={{ padding: "8px 16px", marginLeft: "10px" }}>
					{loading ? "Searching..." : "Search"}
				</button>
			</form>

			{/* Error Message */}
			{error && <p style={{ color: "red" }}>Error: {error}</p>}

			{/* Results */}
			<div>
				<h2>Stations near {location}</h2>
				<pre>{JSON.stringify(stations, null, 2)}</pre>
			</div>
		</div>
	);
}


// <pre>{JSON.stringify(stations, null, 2)}</pre>