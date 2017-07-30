import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const pageSrcPath = path.join(__dirname, '/src/')
const pagePolyfills = []
const pageExtendModules = ['webpack-hot-middleware/client']
const publicPath = '/statics/bundle'

module.exports = {
  entry: {
    reduxapp: [...pagePolyfills, pageSrcPath + 'reduxapp.js', ...pageExtendModules]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, publicPath),
    publicPath: publicPath + '/'
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          'style-loader',
          { loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')({ browsers: ['last 2 versions'] })
              ]
            }
          }])
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'mock',
    tls: 'mock'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new ExtractTextPlugin({
      filename: 'stylesheets/main.css',
      allChunks: true
    })
  ]
}
