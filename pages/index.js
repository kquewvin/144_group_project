import EvStationFinder from "@/components/EvStationFinder";
import styles from "@/styles/Home.module.css"
import Head from "next/head";

export default function Home() {
  return (
		<div>
      <Head>
        <title>EV Station Finder</title>
      </Head>
			<h1 className={styles.title}>EV Station Finder</h1>
			<p className={styles.subtitle}>Find charging stations near you</p>
			<EvStationFinder />
		</div>
	);
}