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
			},
			screens: {
				xs: '412px',
				'pre-md': '540px',
				'pre-lg': '912px',
				'pre-2xl': '1360px'
			},
			borderRadius: {
				pill: '35rem'
			},
			boxShadow: {
				soft: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
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
