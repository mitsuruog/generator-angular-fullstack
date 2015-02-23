'use strict';

var conf = require('./protractor.conf.js');

conf.config.specs = [
  '../functional/**/*.spec.js'
];

module.exports = conf;
