#!/usr/bin/env node

const programm = require('commander');

programm.version('1.0.0')
  .description('Compares two configuration files and shows a difference.');

programm.usage('[options] <filepath1> <filepath2>')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

programm.parse(process.argv);
