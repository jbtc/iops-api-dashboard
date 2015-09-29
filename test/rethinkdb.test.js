'use strict';

let r = require('../lib/config/index');

describe('RethinkDb Configuration', () => {

  describe('connection', () => {

    it('should connect correctly', (done) => {
      r.table('dashboards').run()
        .then((result) => {
          expect(result).to.be.ok;
          done();
        }).catch(done);
    });
  });

});