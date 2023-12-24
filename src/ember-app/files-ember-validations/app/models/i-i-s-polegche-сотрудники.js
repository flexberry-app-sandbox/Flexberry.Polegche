import {
  defineNamespace,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-polegche-сотрудники';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудникиMixin, {
});

defineNamespace(Model);

export default Model;
