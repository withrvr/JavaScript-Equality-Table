import Head from "next/head";

import Table from "@/components/Table";

const TwoEqualTo = () => {
	const title = "2 Equal To ( == )";

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<h1 className="text-2xl text-center mb-3">{title}</h1>

			<Table type="==" />
		</>
	);
};

export default TwoEqualTo;
