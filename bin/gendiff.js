#!/usr/bin/env node
import program from 'commander';
import compare from '../src/index.js';

program.usage('[options] <filepath1> <filepath2>');

program.version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.');

program
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(compare(filepath1, filepath2));
  });

program.parse(process.argv);
