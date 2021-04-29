#!/usr/bin/env node

const programm = require('commander');

programm.version('1.0.0')
  .description('Compares two configuration files and shows a difference.');

programm.parse(process.argv);
