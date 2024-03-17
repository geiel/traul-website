/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'light',
			{
				traultheme: {
					primary: '#008DDA',
					secondary: '#928bf0',
					accent: '#825bea',
					neutral: '#3d4451',
					'base-100': '#f5fbfe'
				}
			}
		]
	}
};
