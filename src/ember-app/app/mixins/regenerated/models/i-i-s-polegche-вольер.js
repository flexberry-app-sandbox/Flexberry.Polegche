import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  площадь: DS.attr('string'),
  типВольера: DS.attr('i-i-s-polegche-тип-вольера'),
  составВольера: DS.hasMany('i-i-s-polegche-состав-вольера', { inverse: 'вольер', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-polegche-вольер.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-polegche-вольер.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типВольера: {
    descriptionKey: 'models.i-i-s-polegche-вольер.validations.типВольера.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  составВольера: {
    descriptionKey: 'models.i-i-s-polegche-вольер.validations.составВольера.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
