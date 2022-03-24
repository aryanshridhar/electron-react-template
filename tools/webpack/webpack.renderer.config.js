const rules = require('./common/webpack.rules');
const plugins = require('./common/webpack.plugins');
const alias = require('./common/webpack.alias');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: alias,
  },
};
