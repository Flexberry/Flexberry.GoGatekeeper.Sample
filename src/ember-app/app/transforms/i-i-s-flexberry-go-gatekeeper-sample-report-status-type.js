import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ReportStatusTypeEnum from '../enums/i-i-s-flexberry-go-gatekeeper-sample-report-status-type';

export default FlexberryEnum.extend({
  enum: ReportStatusTypeEnum,
  sourceType: 'IIS.FlexberryGoGatekeeperSample.ReportStatusType'
});
