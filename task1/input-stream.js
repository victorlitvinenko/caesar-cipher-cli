const fs = require('fs');

exports.inputStream = function (filePath) {
  let inputStream;
  if (filePath) {
    inputStream = fs.createReadStream(filePath);
  } else {
    inputStream = process.stdin;
    console.log('Type your text. Press [Enter] to process. [Ctrl]+[C] to stop.');
  }
  return inputStream;
};
