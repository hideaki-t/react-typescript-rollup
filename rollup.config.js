import typescript from 'rollup-plugin-typescript'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
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
];

export default {
  entry: './src/main.tsx',
  dest: './dest/main.js',
  format: 'iife',
  sourceMap: 'inline',

  plugins: plugins
}

if (process.env.ROLLUP_WATCH === 'true') {
  plugins.push(
    serve(''),
    livereload({
      watch: 'dist',
      verbose: true
    })
  )
}
