import React from "react";
import Head from "next/head";
import styles from "./About.module.css";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>About Our App</h1>
				<p className={styles.desc}>
					In 2022, the transportation sector contributed to one-third of total greenhouse gas emissions in the United
					States alone. In efforts to help decarbonize the transportation sector and reduce overall carbon emissions, we
					developed an app that would help drivers locate EV charging stations near your specified location.
					<br />
					<br />
					We believe that the EV industry can pave the way for sustainable modes of transportation. Although the EV
					infrastructure is still lacking, we hope that our app will provide convenience and accessibility for our
					users.
					<br />
					<br />
				</p>
				<h2 className={styles.title2}>Core Features</h2>
				<p className={styles.desc}>
					Simply enter a city name followed by state or province, for example "Toronto, ON", and it will return a list
					of EV stations along with its address and a Google Maps link for that station.
				</p>
			</div>
		</>
	);
}
