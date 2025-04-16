import { useState } from "react";
import styles from "./EvStationFinder.module.css";

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
    <div className={styles.container}>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <div className={styles.error}>Error: {error}</div>}

      <div>
        {loading ? (
          <p className={styles.loading}>Loading stations...</p>
        ) : stations.length > 0 ? (
          <ul className={styles.stationList}>
            {stations.map((station) => (
              <li key={station.id} className={styles.stationItem}>
                <div className={styles.stationName}>{station.name}</div>
                <div className={styles.stationAddress}>{station.formatted_address}</div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(station.formatted_address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapsLink}
                >
                  View on Google Maps
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noStations}>No stations found</p>
        )}
      </div>

      {/* Trademark notice added here */}
      <div className={styles.trademark}>
        ™ Rudy G, Kevin C and Evin P
      </div>
    </div>
  );
}