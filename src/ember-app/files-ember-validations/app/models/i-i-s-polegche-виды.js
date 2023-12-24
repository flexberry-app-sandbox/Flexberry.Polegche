import {
  defineNamespace,
  Model as ВидыMixin
} from '../mixins/regenerated/models/i-i-s-polegche-виды';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВидыMixin, {
});

defineNamespace(Model);

export default Model;
