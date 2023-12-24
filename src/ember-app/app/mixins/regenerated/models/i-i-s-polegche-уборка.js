import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  времяУборки: DS.attr('string'),
  деньУборки: DS.attr('date'),
  вольер: DS.belongsTo('i-i-s-polegche-вольер', { inverse: null, async: false }),
  должность: DS.belongsTo('i-i-s-polegche-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  времяУборки: {
    descriptionKey: 'models.i-i-s-polegche-уборка.validations.времяУборки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  деньУборки: {
    descriptionKey: 'models.i-i-s-polegche-уборка.validations.деньУборки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  вольер: {
    descriptionKey: 'models.i-i-s-polegche-уборка.validations.вольер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-polegche-уборка.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
