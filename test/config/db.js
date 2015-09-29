'use strict';

'use strict';

let r = require('rethinkdbdash')({
  db: 'iops_dashboards_testing',
  servers: [
    { host: '192.168.99.100', port: 28015 }
  ]
});

module.exports = r;