module.exports = {
	purge: {
		enabled: true,
		content: [ './*.html' ]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'circular-bold-italic': [ '"Circular Std Bold Italic"', 'serif' ],
				'circular-medium': [ '"Circular Std Medium"', 'serif' ],
				'circular-black': [ '"Circular Std Black"', 'serif' ],
				'circular-bold': [ '"Circular Std Bold"', 'serif' ],
				'circular-book': [ '"Circular Std Book"', 'serif' ],
				'circular-black-italic': [ '"CircularStd-BlackItalic"', 'serif' ]
			},
			height: {
				'1/10': [ '10%' ],
				'2/10': [ '20%' ],
				'3/10': [ '30%' ],
				'4/10': [ '40%' ],
				'5/10': [ '50%' ],
				'6/10': [ '60%' ],
				'7/10': [ '70%' ],
				'8/10': [ '80%' ],
				'9/10': [ '90%' ]
			},
			width: {
				'1/10': [ '10%' ],
				'2/10': [ '20%' ],
				'3/10': [ '30%' ],
				'4/10': [ '40%' ],
				'5/10': [ '50%' ],
				'6/10': [ '60%' ],
				'7/10': [ '70%' ],
				'8/10': [ '80%' ],
				'9/10': [ '90%' ]
			},
			colors: {
				'primary-black': '#1D1F1E',
				'primary-green': '#53B7B3'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
