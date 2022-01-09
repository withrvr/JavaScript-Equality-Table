import Cell from "components/Cell";
import { row_values, col_values, printing_values } from "lib/values";

const Table = ({ type }: { type: "===" | "==" }) => {
	// console.log(String(1) == 1);

	const compare_res_val = (row_val: any, col_val: any): boolean => {
		if (type === "===") {
			return row_val === col_val;
		}

		if (type === "==") {
			return row_val == col_val;
		}
		return false;
	};

	return (
		<div className="flex justify-center">
			<div
				className="grid gap-1   w-[38rem] h-[38rem]
				grid-cols-[repeat(21,minmax(0,1fr))]"
			>
				{row_values.map((row_val, row_key) => {
					const row_str_val = printing_values[row_key];

					return col_values.map((col_val, col_key) => {
						const comparition = compare_res_val(row_val, col_val);
						const col_str_val = printing_values[col_key];

						return (
							<Cell
								key={col_key}
								result={comparition ? "green" : "white"}
								title={`${row_str_val} ${type} ${col_str_val} // -> ${comparition}`}
							/>
						);
					});
				})}
			</div>
		</div>
	);
};

export default Table;
