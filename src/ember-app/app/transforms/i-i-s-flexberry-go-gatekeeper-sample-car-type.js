import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import CarTypeEnum from '../enums/i-i-s-flexberry-go-gatekeeper-sample-car-type';

export default FlexberryEnum.extend({
  enum: CarTypeEnum,
  sourceType: 'IIS.FlexberryGoGatekeeperSample.CarType'
});
