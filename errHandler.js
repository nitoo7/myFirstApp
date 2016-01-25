'use strict';

const XError = require('x-error');

// Used to handle all Mongoose related errors
exports.mongoose = function(e) {
  throw new XError(e);
};

// Errors thrown by Node's request libraries tend to have deeply
// nested structures. Some libraries have difficulty parsing these
// errors (Winston in particular). JSON stringify and parse fixes
// this problem
exports.stringify = function(e) {
  throw new XError(JSON.parse(JSON.stringify(e)));
};