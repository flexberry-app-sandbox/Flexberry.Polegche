import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  животные: DS.belongsTo('i-i-s-polegche-животные', { inverse: null, async: false }),
  вольер: DS.belongsTo('i-i-s-polegche-вольер', { inverse: 'составВольера', async: false })
});

export let ValidationRules = {
  животные: {
    descriptionKey: 'models.i-i-s-polegche-состав-вольера.validations.животные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вольер: {
    descriptionKey: 'models.i-i-s-polegche-состав-вольера.validations.вольер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
