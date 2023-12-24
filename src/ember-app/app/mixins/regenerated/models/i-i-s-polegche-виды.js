import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  местоОбитания: DS.attr('string'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  местоОбитания: {
    descriptionKey: 'models.i-i-s-polegche-виды.validations.местоОбитания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-polegche-виды.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
