export default class WidgetController {

  static $inject = ['od.adapter.service', '$element', '$scope', 'moment'];

  constructor($adapter, $element, $scope, moment) {

    this.$adapter = $adapter;
  }
}