import { AppProps } from "next/app";
import Head from "next/head";

import NextNProgress from "nextjs-progressbar";

import Tailwindbreakpoints from "@/components/Tailwindbreakpoints";
import Navbar from "@/components/Navbar";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			{/* progress bar on change in router */}
			<NextNProgress
				color="#24292F"
				startPosition={0.0}
				stopDelayMs={0}
				height={2}
				showOnShallow={true}
			/>

			{/* <Tailwindbreakpoints /> */}

			<Head>
				<title>JavaScript Equality Table :)</title>
				<link rel="icon" href="/logo.svg" />

				{/* meta tags */}
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<div id="wrapper" className="flex flex-col md:flex-row ">
				<div className="my-3 w-[19rem] md:w-40 self-center md:self-start">
					<Navbar />
				</div>

				<main id="main-content" className="my-5 mx-auto">
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
};

export default App;
