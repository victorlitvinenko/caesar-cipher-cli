const fs = require('fs');

exports.inputStream = filePath => {
  let inputStream;
  if (filePath) {
    if (fs.existsSync(filePath)) {
      inputStream = fs.createReadStream(filePath);
    }
    else {
      console.error('Input file path is invalid!');
      process.exit(9);
    }
  } else {
    inputStream = process.stdin;
    inputStream.on('readable', function () {
      process.stdin.read();
    });
  }
  return inputStream;
};
