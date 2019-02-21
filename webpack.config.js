const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()]
};
