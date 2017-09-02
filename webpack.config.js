const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DEBUG = process.env.NODE_ENV === 'production' ? false : true;

module.exports = {
  devtool: 'source-map',
  entry: [
    `${__dirname}/src/index.js`
  ],
  target: 'web',
  output: {
    path: `${__dirname}/dist/js/`,
    publicPath: '/',
    filename: 'bundle.min.js'
  },
  devServer: {
    hot: true, 
    publicPath: '/dist/js',
    contentBase: `${__dirname}/`,
    port: 1337,
    inline: true,
},
resolve: {
  extensions: [ '.js', '.jsx' ],
},
plugins: DEBUG ? [] : [
  new ExtractTextPlugin({filename: '../css/style.min.css',
      allChunks: true
  }),
  new UglifyJsPlugin({
      compress: { warnings: false },
      include: /\.min\.js$/
  }),
  new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
  }),
],
  module: {
    loaders: [
      {
          loader: 'babel-loader?sourceMap',
          exclude: /node_modules/,
          query: {
              presets: [ 'react', 'es2015', 'stage-1' ],
          }
      },
      {
          test: /\.scss$/,
          loader: DEBUG ? 'style-loader!css-loader!sass-loader' 
                        : ExtractTextPlugin.extract({
                              fallback: 'style-loader',
                              use: 'css-loader!sass-loader'
                          })
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};