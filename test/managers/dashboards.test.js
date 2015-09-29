'use strict';

let r = require('../config/db');
let DashboardManager = require('../../lib/managers/dashboards');

describe('Dashboards Manager', () => {

  afterEach((done) => {
    r.table('dashboards').delete().run().then(() => {
      done();
    }).catch(done);
  });

  describe('all(accountId)', () => {

    beforeEach((done) => {
      r.table('dashboards').insert([{ name: 'test', accountId: '1234', isActive: true }]).run().then(() => {
        done();
      }).catch(done);
    });

    let dashboard;
    before(() => {
      dashboard = new DashboardManager(r);
      expect(dashboard).to.be.ok;
    });

    it('should return valid results', (done) => {
      dashboard.all('1234').then((results) => {
        expect(results).to.not.be.empty;
        done();
      }).catch(done);
    });

    it('should return empty if accountId is not found', (done) => {
      dashboard.all('5678').then((results) => {
        expect(results).to.be.empty;
        done();
      }).catch(done);
    });

  });


});