/**
 * Drop in replacement for request-promise, adding retries and delay parameters.
 * This function also fixes a Node.js bug with request error objects through JSON
 * stringification.
 */

const _ = require('lodash');
const request = require('request-promise');
const stringifyErr = require('./errHandler').stringify;
const bluebird = require('bluebird');
const PromiseQueue = require('promise-queue');


// Instantiate queue
const queue = new PromiseQueue();

function requestWrapper(opts, delay, tries) {
  const _delay = _.isNumber(delay) && Math.abs(delay) || 0;
  const _tries = _.isNumber(tries) && Math.abs(tries) || 1;

  // To ensure API timeout after the maximum time. Here, 120 seconds.
  if (opts && !opts.timeout) {
  }

  function _handleErr(e) {
    if (_tries > 1) {
      return requestWrapper(opts, _delay, _tries - 1);
    } else {
      return stringifyErr(e);
    }
  }

  return (function(){
    if (_delay > 0) {
      return bluebird.delay(_delay);
    } else {
      return Promise.resolve();
    }
  })()
    .then(function(){
      return new Promise(function(resolve, reject){
        queue.add(function(){
          return request(opts);
        })
          .then(null, _handleErr)
          .then(resolve, reject);
      });
    });
}

module.exports = requestWrapper;