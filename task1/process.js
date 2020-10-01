const { pipeline } = require('stream');

const { validate } = require('./validate');

const { inputStream } = require('./input-stream');
const { outputStream } = require('./output-stream');
const { transformStream } = require('./transform-stream');

const ALPHABET_LETTERS_COUNT = 26;

exports.process = function (action, shift, inputFilePath, outputFilePath) {
  validate(action, shift, inputFilePath, outputFilePath);

  pipeline(
    inputStream(inputFilePath),
    transformStream(action, shift > ALPHABET_LETTERS_COUNT ? shift % ALPHABET_LETTERS_COUNT : shift),
    outputStream(outputFilePath),
    function (err) {
      if (err) {
        console.error('Can\'t write to ' + err.path);
      }
    }
  );
};
