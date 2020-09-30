const fs = require('fs');

exports.outputStream = function (filePath) {
  let outputStream;
  if (filePath) {
    outputStream = fs.createWriteStream(filePath, { flags: 'a' });
  } else {
    outputStream = process.stdout;
  }
  return outputStream;
};
