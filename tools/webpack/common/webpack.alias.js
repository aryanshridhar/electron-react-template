const path = require('path');
const cwd = process.cwd();

module.exports = {
  '@assets': path.join(cwd, 'assets'),
  '@types': path.join(cwd, 'types'),
};
