import {
  defineNamespace,
  Model as СоставВольераMixin
} from '../mixins/regenerated/models/i-i-s-polegche-состав-вольера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставВольераMixin, {
});

defineNamespace(Model);

export default Model;
