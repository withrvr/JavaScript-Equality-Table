import Head from "next/head";

import { printing_values } from "@/lib/values";

const IfCondition = () => {
	return (
		<>
			<Head>
				<title> if condition execution </title>
			</Head>

			<h1 className="text-2xl"> Under Development </h1>
			<div>
				{printing_values.map((val, key) => {
					return (
						<div key={key}>
							{key} - {val}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default IfCondition;
