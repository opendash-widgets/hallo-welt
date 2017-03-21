export default class WidgetController {

  static $inject = ['od.adapter.service', '$element', '$scope', 'moment', '$timeout'];

  constructor($adapter, $element, $scope, moment, $timeout) {

    this.$adapter = $adapter;
    this.ftgroup = 1000;

    console.log(this.loading);

    $timeout(() => { this.loading = false }, 1000);
  }
}