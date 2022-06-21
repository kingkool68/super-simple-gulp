# Super Simple Gulp Build Process

A super simple Gulp build process for compiling CSS and JavaScript.

## Features
  - Convert Sass to CSS via [Dart Sass](https://sass-lang.com/dart-sass)
  - Compile and minify JavaScript via [esbuild](https://esbuild.github.io/)
  - Watch files for changes and recompile automagically

## Getting Started

 - Copy `gulpfile.js`, `gulp-config.js`, and `package.json` to your project.
 - Optional: Modify configuration in `gulp-config.js` and the top of `package.json`
 - Navigate to the same directory where `package.json` lives
 - Run `npm install`
 - Gulp will start watching your files for changes and recompile as needed

When you want to start the build process again run `npm run start`. Have fun!

This project is based off of [WPGulp](https://github.com/ahmadawais/WPGulp) by [@ahmadawais](https://github.com/ahmadawais)
