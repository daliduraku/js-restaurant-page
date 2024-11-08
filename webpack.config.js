const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // This option cleans up the output directory before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Your main HTML template
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
  },
  mode: 'development',
};

