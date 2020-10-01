const fs = require('fs');

exports.validate = function (action, shift, inputFilePath, outputFilePath) {
  if (!action || !shift) {
    console.error('Action and shift are required options!');
    process.exit(1);
  }
  if (shift < 0) {
    console.error('Shift must be positive!');
    process.exit(1);
  }
  if (inputFilePath && (!fs.existsSync(inputFilePath) || !fs.lstatSync(inputFilePath).isFile())) {
    console.error('Input file "' + inputFilePath + '" does not exist!');
    process.exit(1);
  }
  if (outputFilePath && (!fs.existsSync(outputFilePath) || !fs.lstatSync(outputFilePath).isFile())) {
    console.error('Output file "' + outputFilePath + '" does not exist!');
    process.exit(1);
  }
}
