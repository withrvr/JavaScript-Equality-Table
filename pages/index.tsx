import Table from "components/Table";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>JavaScript Equality Table</title>
			</Head>

			{/* <style jsx>{`
				ol {
					list-style-type: circle;
				}
			`}</style> */}

			<h1 className="text-5xl font-bold mb-6 underline"> JavaScript Equality Table </h1>

			<ol className="text-xl list-disc list-inside my-3 ">
				<li> ( === ) Vs ( == ) </li>
				<li>  How if( ... ) Statement work in Javascript </li>

				<br />

				<li> Moral of the story / <b>Why ?</b> this project </li>
				<li> Always use 3 equals ( === ), Unless you have a good reason to use 2 ( == ). </li>

				<br />

				<li> See RESULT ... by clicking on the tabs </li>
				<li> Hover on tables cell for more detail </li>

				<br />

				<li><a
					href="https://github.com/withrvr/JavaScript-Equality-Table"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					Github Repository Link, for this Project
				</a></li>
				<li><a
					href="https://github.com/dorey/JavaScript-Equality-Table"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					Credit / Inspired from
				</a></li>
			</ol>

			<div className="text-center">
				<span> Made With ❤ by </span>
				<a
					href="https://withrvr.bio.link/"
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
