const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  // entry: {
  //   bundle: path.resolve(__dirname, 'src/index.js'),
  //   // bundle: path.resolve(__dirname, 'src/css/main.css'),
  // },

  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[name][contenthash].js',
  //   clean: true,
  //   // assetModuleFilename: 'src/assets/images/[name][ext]',
  // },

  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },

      {
        test: /\.js$ /,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$i/,
        type: 'asset/resource',
        use: [
          {
            options: {
              name: 'assets/images/[name].[ext]',
              outputPath: 'dist',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CssMinimizerPlugin(),
    new HtmlWebpackPlugin({
      title: 'Frontend Mentor | Social proof section',
      filename: 'index.html',
      template: 'src/template.html',
    }),

    new BundleAnalyzerPlugin(),
  ],
};
