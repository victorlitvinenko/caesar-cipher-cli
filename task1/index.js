const fs = require('fs');
const { pipeline } = require('stream');

const { inputStream } = require('./input-stream');
const { outputStream } = require('./output-stream');

exports.process = function (action, shift, inputFilePath, outputFilePath) {
  if (!action || !shift) {
    console.error('Action and shift are required options!');
    process.exit(9);
  }

  pipeline(
    inputStream(inputFilePath),
    // transform_stream,
    outputStream(outputFilePath),
    (err) => {
      console.error('Process failed.', err);
    }
  );
};
