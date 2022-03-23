const rules = require('./common/webpack.rules');
const plugins = require('./common/webpack.plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
        extensions: ['.ts', '.tsx'],
      }),
    ],
  },
};
