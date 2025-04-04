import { useState } from "react";

export default function StationFinder() {
	const [stations, setStations] = useState([]);
	const [location, setLocation] = useState("Toronto, ON");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`/api/evStations?location=${encodeURIComponent(location)}`);
			const data = await response.json();
			// Path to stations array
			const stationsData = data.stations?.data;

			if (!Array.isArray(stationsData)) {
				throw new Error("API response format unexpected");
			}

			setStations(stationsData);
		} catch (err) {
			console.error("Fetch error:", err);
			setError(err.message);
			setStations([]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Enter location' />
				<button type='submit' disabled={loading}>
					{loading ? "Searching..." : "Search"}
				</button>
			</form>

			{error && <div style={{ color: "red" }}>Error: {error}</div>}

			<div>
				{loading ? (
					<p>Loading stations...</p>
				) : stations.length > 0 ? (
					<ul style={{ listStyle: "none", padding: "1rem" }}>
						{stations.map((station) => (
							<li key={station.id} style={{ marginBottom: "1rem" }}>
								<strong>{station.name}</strong>
								<div>{station.formatted_address}</div>
								<div style={{ color: "lightblue" }}>
									<a
										href={`https://maps.google.com/?q=${encodeURIComponent(station.formatted_address)}`}
										target='_blank'
										rel='noopener noreferrer'>
										View on Google Maps
									</a>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p>No stations found</p>
				)}
			</div>
		</div>
	);
}
