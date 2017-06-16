import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
export default {
  entry: './src/main.tsx',
  dest: './dest/main.js',
  format: 'iife',

  plugins: [
    resolve({
      module: true,
    }),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    typescript({
      "typescript": require('typescript')
    })
  ]
}
