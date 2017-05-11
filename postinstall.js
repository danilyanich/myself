const fs = require('fs');

fs.unlink('./node_modules/~', () => {
  fs.symlinkSync('../', './node_modules/~', 'dir');
});
