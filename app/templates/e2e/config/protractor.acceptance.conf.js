'use strict';

var conf = require('./protractor.conf.js');

conf.config.specs = [
  '../acceptance/**/*.spec.js'
];

module.exports = conf;
