import { Serializer as UserReportSerializer } from
  '../mixins/regenerated/serializers/i-i-s-flexberry-go-gatekeeper-sample-user-report';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(UserReportSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
