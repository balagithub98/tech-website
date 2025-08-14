// PostCSS configuration for Tailwind CSS and Autoprefixer.
//
// Since this project uses ES modules (type: "module" in package.json), this
// file needs to use an ES module export instead of CommonJS's `module.exports`.
// See https://nodejs.org/api/esm.html for details.

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};