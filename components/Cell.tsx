const Cell = ({
	result,
	title,
}: {
	result: "green" | "white" | "red";
	title: string;
}) => {
	return (
		<div
			className={
				"sm:rounded-[0.2rem] rounded-sm border sm:border-2 w-full h-full " +
				// "w-[19/21rem] h-[19/21rem] sm:w-[38/21rem] sm:h-[38/21rem] " +
				(result === "green" ? "bg-green-500 border-green-700" : "") +
				(result === "white" ? "bg-white border-zinc-400" : "") +
				(result === "red" ? "bg-red-500 border-red-700" : "")
			}
			title={title}
		></div>
	);
};

export default Cell;
