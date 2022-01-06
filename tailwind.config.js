module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				"3xl": "1600px",
				"4xl": "1800px",
				"5xl": "2000px",
				"6xl": "2200px",
			},
			colors: {},
		},
		container: {
			center: true,
			padding: "1rem",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
