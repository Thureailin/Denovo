/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		container: {
			center: true,
			padding: {
				// md: "2rem !important",
				lg: "1rem !important",
				// xl: "8rem !important",
			},
			screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

			},
		},
		extend: {
			colors: {
				"cus-primary": "#a57c00",
        "cus-secondary": "#faeadd",
        "cus-side": "#675c58"
			},
			backgroundImage: {
				"hero-pattern": "url('@/assets/img/test/1.jpg')",
      },
      fontFamily: {
      'cusmain': ['"Bebas Neue"', 'cursive'],
      'primary': ['Poppins', 'sans-serif'],
      'secondary': ['Playfair Display', 'serif']
    }
		},
	},
  plugins: [require("tw-elements/dist/plugin"),require('@tailwindcss/forms')]
}
