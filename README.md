I created this repo for doing experimentation with React.

I wanted something small without having to create a webpack config.

This project uses

* Parcel bundler
* Tailwindcss
* React

To simplify using async/await there is a `"browserslist"` entry in the package.json.
This avoids regenerator runtime errors, you probably want to add babel polyfills
if you were going to do a prod build.
