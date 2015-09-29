'use strict';

class DashboardsManager {

  constructor(r) {
    this.r = r;
    this.table = r.table('dashboards');
  }

  all(accountId) {
    return this.table.filter({
      accountId: accountId
    }).run();
  }

  byId(id) {
    return this.table.get(id).run();
  }

  create(dashboard) {
    return this.table.insert(dashboard).run();
  }

  update(dashboard) {
    return this.table.get(dashboard.id).update(dashboard).run();
  }

  delete(id) {
    return this.table.get(id).delete();
  }
}

module.exports = DashboardsManager;