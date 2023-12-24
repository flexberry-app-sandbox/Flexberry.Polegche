import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

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

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УборкаE', 'i-i-s-polegche-уборка', {
    деньУборки: attr('День уборки', { index: 0 }),
    времяУборки: attr('Время уборки', { index: 1 }),
    должность: belongsTo('i-i-s-polegche-должность', 'Должность', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    вольер: belongsTo('i-i-s-polegche-вольер', 'Вольер', {
      площадь: attr('Площадь', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'площадь' })
  });

  modelClass.defineProjection('УборкаL', 'i-i-s-polegche-уборка', {
    деньУборки: attr('День уборки', { index: 0 }),
    времяУборки: attr('Время уборки', { index: 1 }),
    должность: belongsTo('i-i-s-polegche-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    вольер: belongsTo('i-i-s-polegche-вольер', 'Площадь', {
      площадь: attr('Площадь', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
