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
				"sm:rounded-[0.2rem] rounded-sm border sm:border-2 " +
				(result === "green" ? "bg-green-500 border-green-700" : "") +
				(result === "white" ? "bg-white border-zinc-400" : "") +
				(result === "red" ? "bg-red-500 border-red-700" : "")
			}
			title={title}
		></div>
	);
};

export default Cell;
