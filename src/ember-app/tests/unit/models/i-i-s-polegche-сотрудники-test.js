import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-polegche-сотрудники', 'Unit | Model | i-i-s-polegche-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
