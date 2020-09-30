const { pipeline } = require('stream');

const { inputStream } = require('./input-stream');
const { outputStream } = require('./output-stream');
const { transformStream } = require('./transform-stream');

exports.process = function (action, shift, inputFilePath, outputFilePath) {
  if (!action || !shift) {
    console.error('Action and shift are required options!');
    process.exit(9);
  }

  pipeline(
    inputStream(inputFilePath),
    transformStream(action, shift),
    outputStream(outputFilePath),
    function (err) {
      if (err) {
        console.error('Process failed.', err);
      }
    }
  );

};
