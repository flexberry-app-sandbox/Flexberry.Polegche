import {
  defineNamespace,
  Model as УборкаMixin
} from '../mixins/regenerated/models/i-i-s-polegche-уборка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УборкаMixin, {
});

defineNamespace(Model);

export default Model;
