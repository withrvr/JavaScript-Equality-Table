import Head from "next/head";

import { col_values, printing_values } from "lib/values";
import Cell from "components/Cell";

const IfCondition = () => {
	const title = "if condition execution";
	return (
		<>
			<Head>
				<title> {title} </title>
			</Head>

			<h1 className="text-center text-2xl mb-3"> {title} </h1>
			<div className="flex gap-8">
				<table>
					{col_values.map((val, key) => {
						const str_val = printing_values[key];
						const condition_title = `if (${str_val}) { /* ${
							val ? "" : "Dees not"
						} Executes */ }`;

						return (
							<>
								<tr key={key}>
									<td className="text-right pr-3 ">
										{str_val}
									</td>
									<td className="min-w-[1.75rem] min-h-[1.75rem] max-h-[1.75rem] w-7 h-7">
										<Cell
											result={val ? "green" : "white"}
											title={condition_title}
										/>
									</td>
									<td className="pl-3 text-sm ">
										{condition_title}
									</td>
								</tr>
								<div className="h-1"></div>
							</>
						);
					})}
				</table>

				{/* TODO:
				<div>
					- add 2nd col
					1. this are white one
					2. this is green one ( can be any string, number, object)
				</div> */}
			</div>
		</>
	);
};

export default IfCondition;
