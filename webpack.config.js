var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./entry.js']
    //app: ['webpack/hot/dev-server','./entry.js']
    //app: ['./entry.js','webpack/hot/dev-server']
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  externals: {
    //"highlight": "highlight"
    //node_modules/highlight/lib/highlight.js
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        text: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    //contentBase: 'node_modules'
  }
};
