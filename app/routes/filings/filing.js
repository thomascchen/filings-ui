import Route from '@ember/routing/route';

export default class FilingRoute extends Route {
  model({ filing_id }) {
    return this.store.findRecord('filing', filing_id);
  }
}
