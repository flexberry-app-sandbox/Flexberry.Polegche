import {
  defineNamespace,
  Model as ВольерMixin
} from '../mixins/regenerated/models/i-i-s-polegche-вольер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВольерMixin, {
});

defineNamespace(Model);

export default Model;
