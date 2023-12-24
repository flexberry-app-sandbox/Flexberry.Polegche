import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СоставВольераMixin
} from '../mixins/regenerated/models/i-i-s-polegche-состав-вольера';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставВольераMixin, Validations, {
});

export default Model;
