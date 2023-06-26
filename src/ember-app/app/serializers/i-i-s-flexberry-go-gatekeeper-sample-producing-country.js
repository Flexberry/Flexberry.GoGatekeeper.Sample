import { Serializer as ProducingCountrySerializer } from
  '../mixins/regenerated/serializers/i-i-s-flexberry-go-gatekeeper-sample-producing-country';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ProducingCountrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
