import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
	return (
		<>
			<nav className="nav-bar">
				<Link href="/">Home</Link>
				<Link href="/About">About</Link>
				<Link href="/Contact">Contact</Link>
			</nav>
			<Component {...pageProps} />
		</>
	);
}
