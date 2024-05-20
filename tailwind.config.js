/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/preline/preline.js'
	],

	plugins: [
		require('@tailwindcss/forms'),
		require('preline/plugin')
	],

	theme: {
		extend: {}
	}
};

export default config;
