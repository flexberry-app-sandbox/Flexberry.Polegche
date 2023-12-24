import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-polegche-вольер', 'Unit | Serializer | i-i-s-polegche-вольер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-polegche-вольер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-polegche-пол',
    'transform:i-i-s-polegche-тип-вольера',

    'model:i-i-s-polegche-виды',
    'model:i-i-s-polegche-вольер',
    'model:i-i-s-polegche-должность',
    'model:i-i-s-polegche-животные',
    'model:i-i-s-polegche-состав-вольера',
    'model:i-i-s-polegche-сотрудники',
    'model:i-i-s-polegche-уборка',
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
