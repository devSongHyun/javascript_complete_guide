const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'share-place': './src/SharePlace.js',
    'my-place': './src/MyPlace.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'dist/assets/scripts/',
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3 } },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['my-place'],
      filename: '../../my-place/index.html',
      template: 'template/my-place/index.html',
      publicPath: '../assets/scripts',
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      chunks: ['share-place'],
      filename: '../../index.html',
      template: 'template/index.html',
      publicPath: 'assets/scripts',
      scriptLoading: 'defer',
    }),
  ],
};
