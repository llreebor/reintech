/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: { min: '1840px' },
			lg: { max: '1349.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			xs: { max: '374.99px' },
		},
		container: {
			center: true,
			padding: '20px',
		},
		extend: {
			fontFamily: {
				space: ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				'main-black': '#000655',
				'main-blue': '#2F6EF6',
				'main-shadow': '#8083AA',
				'blue-shadow': '#F5F8FB',
				'black-shadow': '#CCCDDD',
				'main-green': '#5DC36D',
			},

			backgroundImage: {
				'hero-gradient-shadow':
					'linear-gradient(180deg, #D1DCE8 0%, rgba(209, 220, 232, 0.70) 100%)',
				'hero-gradient-black':
					'linear-gradient(180deg, #000655 0%, rgba(0, 6, 85, 0.70) 100%)',
				'hero-gradient-lightgray':
					'linear-gradient(180deg, #F5F8FB 0%, rgba(245, 248, 251, 0.70) 100%)',
				'hero-gradient-blue':
					'linear-gradient(180deg, #2F6EF6 0%, rgba(47, 110, 246, 0.70) 100%)',
			},

			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
