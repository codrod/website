const pather = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: pather.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  //Put webpack dev-server in "quiet" mode so the eleventy dev-sever can do the heavy lifting
  devServer: {
    port: 8081,
    hot: false,
    liveReload: false,
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, // Matches .sass and .scss files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true, // Silences warnings from node_modules
                silenceDeprecations: ['import']
              },
            },
          },
        ],
      },
    ],
  },
});
