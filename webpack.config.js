const webpack = require('webpack')
const path = require('path')

const environment = process.env.NODE_ENV
const isProduction = environment === 'production'

var config = {
  entry: './src/index.js',
  externals: {
    'react': 'react',
    'redux': 'redux',
    'react-redux': 'react-redux'
  },
  output: {
    library: 'ReduxActuator',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? 'redux-actuator.js' : 'redux-actuator.dev.js'
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ]
}

if (environment === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
  config.plugins.push(new webpack.optimize.DedupePlugin())
}

module.exports = config
