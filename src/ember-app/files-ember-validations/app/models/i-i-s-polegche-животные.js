import {
  defineNamespace,
  Model as ЖивотныеMixin
} from '../mixins/regenerated/models/i-i-s-polegche-животные';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖивотныеMixin, {
});

defineNamespace(Model);

export default Model;
