'use strict';

module.exports = function() {
  return {
    files: [
      'lib/**/*.js',
      'test/config/**/*.js',
      'test/helper.js'
    ],

    tests: [
      'test/**/*.test.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    bootstrap: function() {
      require('./test/helper');
    }
  };
};