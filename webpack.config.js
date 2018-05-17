const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  devtool: 'source-map',
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  node: {
    __dirname: true,
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    },
    {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json-loader',
    },
    ],
  },
  resolve: {
    symlinks: true,
  },
  output: {
    libraryTarget: 'commonjs2',
    path: `${__dirname}/.webpack`,
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  // `aws-sdk` is available by default in Lambda function
  externals: ['aws-sdk'],
};
