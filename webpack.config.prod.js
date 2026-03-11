const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pather = require('path');

module.exports = merge(common, {
  mode: 'production',
  watchOptions: {
    ignored: ["**/node_modules", "**/dist"],
  },
  devServer: {
    port: 8080,
    hot: false,
    liveReload: false,
    devMiddleware: {
      writeToDisk: true
    },
  },
  //Add contenthash for cache busting
  output: {
    path: pather.resolve(__dirname, 'dist'),
    filename: 'app.[contenthash].js',
  },
  plugins: [
    //Find all HTML files and inject bundled CSS/JS link/script tags. Note Eleventy should be run first
    ...glob.sync("**/*.html", {cwd: './dist'}).map(pathToHtml => new HtmlWebpackPlugin({
      template: './dist/' + pathToHtml,
      filename: pathToHtml
    })),
    //Add contenthash for cache busting
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    //Removes any used CSS classes/fonts/etc. from the bundled css
    new PurgeCSSPlugin({
      paths: glob.sync("./src/**/*", { nodir: true }),
      fontFace: true,
      keyframes: true,
      variables: true,
    }),
  ],
  module: {
    rules: [
      //Transpiles modern JS to older JS for compatibility with browsers specified in .browserslistrc
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      //Loads SASS, adds polyfills/compatibility configs, transpiles to CSS, and finally extracts to separate CSS file
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
    ],
  },
});
