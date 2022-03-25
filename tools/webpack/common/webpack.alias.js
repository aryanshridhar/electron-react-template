const path = require('path');
const cwd = process.cwd();

module.exports = {
  '@assets': path.join(cwd, 'assets'),
  '@customtypes': path.join(cwd, 'types'),
};
