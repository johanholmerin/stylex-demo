const path = require('path');
const nodeResolve = require('@rollup/plugin-node-resolve');
const cjs = require('@rollup/plugin-commonjs');
const stylexPlugin = require('@stylexjs/rollup-plugin');

module.exports = {
  input: path.resolve(__dirname, 'main.js'),
  output: {
    file: path.resolve(__dirname, 'build.js'),
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    cjs(),
    stylexPlugin({
      dev: false,
      fileName: 'stylex.css',
    }),
  ],
};
