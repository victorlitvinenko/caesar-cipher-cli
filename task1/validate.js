const fs = require('fs');

exports.validate = function (action, shift, inputFilePath, outputFilePath) {
  if (inputFilePath && !fs.existsSync(inputFilePath)) {
    console.error('Input file path is invalid!');
    process.exit(9);
  }
  if (!action || !shift) {
    console.error('Action and shift are required options!');
    process.exit(9);
  }
  if (shift < 0) {
    console.error('Shift must be positive!');
    process.exit(9);
  }
}
