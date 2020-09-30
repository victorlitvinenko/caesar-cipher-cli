const fs = require('fs');

exports.inputStream = function (filePath) {
  let inputStream;
  if (filePath) {
    if (fs.existsSync(filePath)) {
      inputStream = fs.createReadStream(filePath);
    } else {
      console.error('Input file path is invalid!');
      process.exit(9);
    }
  } else {
    inputStream = process.stdin;
    console.log('Enter your text. Ctrl + C to stop.');
  }
  return inputStream;
};
