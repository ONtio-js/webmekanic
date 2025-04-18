/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		// screens: {
		// 	mobile:'480px',
		// 	landscapeMobile:'768px',
		// 	tablet:'834px',
		// 	landscapetablet:'1024px',
		// 	laptop:'1440px',
		// 	desktop:'1440px'
		// },
		extend: {
			screens: {
				xs: '550px',
				tab: '834px',
			},
			colors: {
				primary: '#2563eb',
				secondary: '#1e40af',
				lightprimary: '#dbeafe',
				lightsecondary: '#f1f5f9',
				black: '#1A1A1A',
				gray: '#CBCBCB',
				lightgray: '#ECECEC',
				lightblack: '#64748b',
				backgroundColor: '#ffffff',
				white: '#ffffff',
			},
			backgroundImage: {
				serviceBg: "url('/src/assets/bg/servicebg.svg')",
			},
			fontFamily: {
				comic: ['"Comic Neue"', 'cursive'],
			},
		},
	},
	plugins: [],
};
