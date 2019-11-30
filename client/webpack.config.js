const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) => {
  return {
    mode: options.mode,
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      historyApiFallback: true,
      contentBase: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./assets/index.template.html')
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    performance: { hints: false },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'eslint-loader',
          enforce: 'pre'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(eot|woff|woff2|ttf)$/,
          loaders: ['url-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    }
  };
};
