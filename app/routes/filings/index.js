import Route from '@ember/routing/route';

export default class FilingsRoute extends Route {
  model() {
    return this.store.findAll('filing');
  }
}
