import Table from "components/Table";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>JavaScript Equality Table</title>
			</Head>

			<h1 className="text-3xl"> Site Currently Under Development </h1>

			<ol className="text-xl list-disc list-inside my-3">
				<li> Click on the tabs to see the result </li>
				<li> Hover on tables cell for more detail </li>
			</ol>

			<div className="text-center">
				<span> Made With ❤ by </span>
				<a
					href="http://github.com/withrvr/"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					@withrvr
				</a>
			</div>
		</>
	);
};

export default Home;
