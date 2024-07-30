/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			'light',
			{
				traultheme: {
					primary: '#78c98b',
					secondary: '#89d9ed',
					accent: '#58d8e9',
					neutral: '#3d4451',
					'base-100': '#fafefb'
				}
			}
		]
	}
};
