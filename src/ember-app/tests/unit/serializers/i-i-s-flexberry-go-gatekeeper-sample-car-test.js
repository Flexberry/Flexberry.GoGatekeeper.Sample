import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberry-go-gatekeeper-sample-car', 'Unit | Serializer | i-i-s-flexberry-go-gatekeeper-sample-car', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-flexberry-go-gatekeeper-sample-car',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-flexberry-go-gatekeeper-sample-car-type',
    'transform:i-i-s-flexberry-go-gatekeeper-sample-report-status-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
