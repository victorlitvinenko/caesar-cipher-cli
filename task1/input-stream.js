const fs = require('fs');

exports.inputStream = function (filePath) {
  let inputStream;
  if (filePath) {
    inputStream = fs.createReadStream(filePath);
  } else {
    inputStream = process.stdin;
    console.log('Enter your text. Ctrl+C to stop.');
  }
  return inputStream;
};
