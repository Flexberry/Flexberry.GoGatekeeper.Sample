import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-flexberry-go-gatekeeper-sample-brand-l');
  this.route('i-i-s-flexberry-go-gatekeeper-sample-brand-e',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-brand-e/:id' });
  this.route('i-i-s-flexberry-go-gatekeeper-sample-brand-e.new',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-brand-e/new' });
  this.route('i-i-s-flexberry-go-gatekeeper-sample-car-l');
  this.route('i-i-s-flexberry-go-gatekeeper-sample-car-e',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-car-e/:id' });
  this.route('i-i-s-flexberry-go-gatekeeper-sample-car-e.new',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-car-e/new' });
  this.route('i-i-s-flexberry-go-gatekeeper-sample-producing-country-l');
  this.route('i-i-s-flexberry-go-gatekeeper-sample-producing-country-e',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-producing-country-e/:id' });
  this.route('i-i-s-flexberry-go-gatekeeper-sample-producing-country-e.new',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-producing-country-e/new' });
  this.route('i-i-s-flexberry-go-gatekeeper-sample-user-report-l');
  this.route('i-i-s-flexberry-go-gatekeeper-sample-user-report-e',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-user-report-e/:id' });
  this.route('i-i-s-flexberry-go-gatekeeper-sample-user-report-e.new',
  { path: 'i-i-s-flexberry-go-gatekeeper-sample-user-report-e/new' });
});

export default Router;
