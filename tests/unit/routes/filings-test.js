import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | filings', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:filings');
    assert.ok(route);
  });
});
