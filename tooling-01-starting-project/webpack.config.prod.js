const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'), // __dirname: 현재 경로에 대한 액세스
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map'
  // devServer: {
  //   contentBase: './'
  // }
};