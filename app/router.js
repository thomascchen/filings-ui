import EmberRouter from '@ember/routing/router';
import config from 'filings-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('filings', function() {
    this.route('filing', { path: '/:filing_id' });
  });
});
