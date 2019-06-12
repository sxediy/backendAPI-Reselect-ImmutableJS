const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const lessToJs = require('less-vars-to-js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/ant-theme.less'), 'utf8'));

module.exports = {
  target: 'web',
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: themeVariables,
                javascriptEnabled: true
              }
            }
          ],
        }),
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    overlay: true,
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
