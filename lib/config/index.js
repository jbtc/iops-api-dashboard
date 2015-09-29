'use strict';

let r = require('rethinkdbdash')({
  db: 'iops_dashboards',
  discovery: true,
  servers: [
    { host: 'docker.dev', port: 28015 }
  ]
});

module.exports = r;