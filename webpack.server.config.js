const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
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
};

module.exports = merge(config, serverConfig);
