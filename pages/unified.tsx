import Head from "next/head";
import Link from "next/link";

import Table from "components/Table";

const Unified = () => {
	const title = "Unified Table";

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div className="text-center ">
				<h1 className="text-4xl mb-3">
					⚠️ Currently Under Development ⚠️
				</h1>
				<h1 className="text-2xl mb-3">{title}</h1>
				<Table type="unified" />
				<br />
				<br />
				Unified Table, Its nothing but combination of
				<span className="link">
					{" "}
					<Link href="/3-equal-to"> === </Link>
				</span>
				and
				<span className="link">
					{" "}
					<Link href="/2-equal-to"> == </Link>
				</span>
				table
				<br />
				so that we can see both result at same time
				<br />
				<br />
				In case you want to see before ... how its gone be look like
				<br />
				<span> see on original site {"-->"} </span>
				<a
					href="https://dorey.github.io/JavaScript-Equality-Table/unified/"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					https://dorey.github.io/JavaScript-Equality-Table/unified/
				</a>
			</div>
		</>
	);
};

export default Unified;
