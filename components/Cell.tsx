const Cell = ({ result }: { result: "green" | "red" | "white" }) => {
	// "bg-red-500 border-red-700"

	return (
		<div
			className={
				"rounded border sm:border-2 " +
				(result === "green"
					? "bg-green-500 border-green-700"
					: "bg-white border-zinc-400")
			}
		></div>
	);
};

export default Cell;
