import { Serializer as SparePartSerializer } from
  '../mixins/regenerated/serializers/i-i-s-flexberry-go-gatekeeper-sample-spare-part';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SparePartSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
