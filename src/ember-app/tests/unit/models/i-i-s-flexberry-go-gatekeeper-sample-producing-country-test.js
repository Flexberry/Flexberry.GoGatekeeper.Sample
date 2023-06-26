import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberry-go-gatekeeper-sample-producing-country', 'Unit | Model | i-i-s-flexberry-go-gatekeeper-sample-producing-country', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-flexberry-go-gatekeeper-sample-brand',
    'model:i-i-s-flexberry-go-gatekeeper-sample-car',
    'model:i-i-s-flexberry-go-gatekeeper-sample-producing-country',
    'model:i-i-s-flexberry-go-gatekeeper-sample-spare-part',
    'model:i-i-s-flexberry-go-gatekeeper-sample-user-report',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
