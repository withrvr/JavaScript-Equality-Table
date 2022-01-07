import Cell from "@/components/Cell";
import values from "@/lib/values";

const Table = () => {
	return (
		<div className="flex justify-center">
			<div
				className="grid gap-0.5 sm:gap-1   w-[19rem] h-[19rem] sm:w-[38rem] sm:h-[38rem]
				grid-cols-[repeat(19,minmax(0,1fr))]"
			>
				{values.map((row_val, row_key) => {
					return values.map((col_val, col_key) => {
						return (
							<Cell
								key={col_key}
								result={
									Math.floor(Math.random() * 2)
										? "green"
										: "white"
								}
							/>
						);
					});
				})}
			</div>
		</div>
	);
};

export default Table;
