#!/usr/bin/env node
const program = require('commander');
const { process } = require('./process');

program
  .storeOptionsAsProperties(true)
  .description('Encrypts and decrypts files and input/output using the Caesar cipher.')
  .version('0.0.6')
  .option('-s, --shift <number>', 'A shift number')
  .option('-i, --input <filePath>', 'An input file path')
  .option('-o, --output <filePath>', 'An output file path')
  .option('-a, --action <encode/decode>', 'An action encode/decode')
  .action(function () {
    process(program.action, program.shift, program.input, program.output);
  })
  .parse(process.argv);
