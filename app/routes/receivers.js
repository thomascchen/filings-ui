import Route from '@ember/routing/route';

export default class ReceiversRoute extends Route {
  queryParams = {
    state: {
      refreshModel: true
    }
  };

  model(params) {
    return this.store.query('receiver', params);
  }
}
