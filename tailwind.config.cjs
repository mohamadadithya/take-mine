const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				primary: colors.emerald
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#047857',
					secondary: '#ffffff',
					accent: '#fde68a',
					neutral: '#2a323c',
					'base-100': '#f3f4f6',
					info: '#3b82f6',
					success: '#16a34a',
					warning: '#fbbd23',
					error: '#b91c1c'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
