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
			screens:{
				xs:'550px',
				tab:'834px'
			},
			colors: {
				primary: '#1300FF',
				lightprimary: '#d2f8ff',
				secondary: '#014EFF',
				black: '#1A1A1A',
				gray: '#CBCBCB',
				lightgray: '#ECECEC',
				lightblack: '#535252',
				lightsecondary: '#F7F6FF',
				backgroundColor: '#ffffff',
				white: '#ffffff',
			},
			backgroundImage: {
				serviceBg: "url('/src/assets/bg/servicebg.svg')",
			},
		},
	},
	plugins: [],
};
