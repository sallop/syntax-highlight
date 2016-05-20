var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server','./entry.js']
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }
};
