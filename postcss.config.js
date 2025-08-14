// PostCSS configuration for Tailwind CSS and Autoprefixer using ES module syntax.
//
// Tailwind's PostCSS plugin has been moved into a separate package
// (`@tailwindcss/postcss`) as of Tailwind CSS v4.0. Without this
// package, Vite will throw an error during the build process about
// using `tailwindcss` directly as a PostCSS plugin. See the
// Tailwind CSS release notes for details.
//
// To enable Tailwind CSS with PostCSS in an ESM environment (because
// `package.json` specifies "type": "module"), import the plugins
// using `import` statements and export a configuration object. The
// `plugins` field can be either an array or an object; here we use
// an array to ensure order is preserved.

import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};