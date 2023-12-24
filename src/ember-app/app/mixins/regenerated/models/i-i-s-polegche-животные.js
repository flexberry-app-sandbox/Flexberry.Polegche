import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  кличка: DS.attr('string'),
  кодЖивотного: DS.attr('number'),
  пол: DS.attr('i-i-s-polegche-пол'),
  виды: DS.belongsTo('i-i-s-polegche-виды', { inverse: null, async: false })
});

export let ValidationRules = {
  кличка: {
    descriptionKey: 'models.i-i-s-polegche-животные.validations.кличка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодЖивотного: {
    descriptionKey: 'models.i-i-s-polegche-животные.validations.кодЖивотного.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-polegche-животные.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  виды: {
    descriptionKey: 'models.i-i-s-polegche-животные.validations.виды.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
