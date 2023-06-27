import {
  defineNamespace,
  defineProjections,
  Model as CarMixin
} from '../mixins/regenerated/models/i-i-s-flexberry-go-gatekeeper-sample-car';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CarMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
