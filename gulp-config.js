/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

module.exports = {

	// START Editing Project Variables.
	// Style options.
	styleSRC: './scss/**/*.scss', // Path to .scss files.
	styleDestination: './css/', // Path to place the compiled CSS file. Default set to root folder.
	outputStyle: 'compressed', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Custom options.
	jsCustomSRC: './js/**/*.src.js', // Path to JS custom scripts folder.
	jsCustomDestination: './js/', // Path to place the compiled JS custom scripts file.

	// Watch files paths.
	styleWatchFiles: './scss/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	customJSWatchFiles: './js/**/*.src.js', // Path to all custom JS files.

	// Dependencies to move into place
	// NOTE: rename is object of options to pass to gulp-rename
	filesToMove: [

		/*
		{
			src: './node_modules/flickity/dist/flickity.css',
			dest: './assets/scss/vendor/',
			rename: {
				basename: '_flickity',
				extname: '.scss'
			}
		}, {
			src: './node_modules/flickity/dist/flickity.pkgd.js',
			dest: './assets/js/vendor/',
			rename: {
				basename: 'flickity.src',
				extname: '.js'
			}
		}
		*/
	],

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	BROWSERS_LIST: [
		'last 10 versions',
		'ie >= 6',
		'Android >= 2.3'
	]

	// STOP Editing Project Variables.
};
