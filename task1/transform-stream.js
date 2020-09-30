const fs = require('fs');
const through2 = require('through2');

const { caesar } = require('./caesar');

exports.transformStream = function (action, shift) {
  return through2(function (chunk, enc, callback) {
    for (let i = 0; i < chunk.length; i++) {
      chunk[i] = caesar(chunk[i], action, shift);
    }
    this.push(chunk);
    callback();
  });
};
