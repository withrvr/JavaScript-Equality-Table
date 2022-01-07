// row_values and col_values
// because from index 15 to index 19
// objects should be created as **NEW**
// if just values then it act as reference
// and reference equal to reference is always true

const comman_values = [
	true, // index 0
	false,
	1,
	0,
	-1,
	String(true), // "true"
	String(false), // "false"
	String(1), // "1"
	String(0), // "0"
	String(-1), // "-1"
	String(), // ""
	null,
	undefined,
	Infinity,
	-Infinity, // index 14
];

const row_values = [
	...comman_values,

	[], // index 15
	{},
	[[]],
	[0],
	[1], // index 19

	NaN,
];

const col_values = [
	...comman_values,

	[], // index 15
	{},
	[[]],
	[0],
	[1], // index 19

	NaN,
];

const printing_values = [
	"true",
	"false",
	"1",
	"0",
	"-1",
	'"true"',
	'"false"',
	'"1"',
	'"0"',
	'"-1"',
	'""',
	"null",
	"undefined",
	"Infinity",
	"-Infinity",
	"[]", // index 15
	"{}",
	"[[]]",
	"[0]",
	"[1]", // index 19
	"NaN",
];

// console.log(values.length);

export { row_values, col_values, printing_values };
