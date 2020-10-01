const os = require('os');
const fs = require('fs');

exports.outputStream = function (filePath) {
  let outputStream;
  if (filePath) {
    outputStream = fs.createWriteStream(filePath, { flags: 'a' });
    outputStream.on('close', function () {
      fs.createWriteStream(filePath, { flags: 'a' }).write(os.EOL);
    });
  } else {
    outputStream = process.stdout;
  }
  return outputStream;
};
