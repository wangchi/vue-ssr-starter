const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"server"' // ssr官方规定
    }),
    new VueSSRServerPlugin()
  ]
};

module.exports = merge(config, serverConfig);
