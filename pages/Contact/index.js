import React from "react";
import Head from "next/head";
import styles from "./Contact.module.css"

function Contact() {
	return (
		<div>
			<Head>
				<title>Contact</title>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}> CPAN144 Advanced Frontend Programming</h1>
				<h2 className={styles.title2}>Developers</h2>
				<p className={styles.desc}>
          <strong>Rudy Goncalves</strong>
          <br />
          <strong>Kevin Chu</strong>
          <br />
          <strong>Evin Park</strong>
				</p>
			</div>
		</div>
	);
}

export default Contact;
