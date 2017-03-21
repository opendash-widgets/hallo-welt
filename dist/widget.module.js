function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WidgetController = function WidgetController($adapter, $element, $scope, moment, $timeout) {
  var _this = this;

  _classCallCheck(this, WidgetController);

  this.$adapter = $adapter;
  this.ftgroup = 1000;

  console.log(this.loading);

  $timeout(function () {
    _this.loading = false;
  }, 1000);
};

WidgetController.$inject = ['od.adapter.service', '$element', '$scope', 'moment', '$timeout'];

var widgetTemplate = "<div style=\"text-align: center; padding: 10px; width: 100%; height: 100%;\">\r\n  <fit-text ftgroup=\"$ctrl.ftgroup\" fttext=\"'Hallo'\" ftwidth=\"'100%'\" ftheight=\"'50%'\"></fit-text>\r\n  <fit-text ftgroup=\"$ctrl.ftgroup\" fttext=\"$ctrl.config.name\" ftwidth=\"'100%'\" ftheight=\"'50%'\" style=\"font-weight: bold;\"></fit-text>\r\n</div>";

var widgetStyle = "";

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function SettingsController() {
  _classCallCheck$1(this, SettingsController);
};

SettingsController.$inject = [];

var settingsTemplate = "<label for=\"widget-settings-name\">Hallo Welt Name</label>\r\n<input\r\n  name=\"widget-settings-name\"\r\n  type=\"text\"\r\n  placeholder=\"Name\"\r\n  ng-model=\"$ctrl.config.name\" />\r\n";

var settingsStyle = "";

var defaultPresets = [{
    name: 'Hallo Welt Widget',
    image: '/assets/vendor/opendash-widget-hallo-welt/assets/preset.png',
    description: 'Ein Beispiel Widget..',
    config: {
        name: 'Hallo Welt Widget',
        config: {
            name: 'Welt'
        }
    }
}];

var index = (function (options) {

    options = options || {};

    var presets = options.presets || defaultPresets;

    return {
        widgetController: WidgetController,
        widgetTemplate: widgetTemplate,
        widgetStyle: widgetStyle,
        settingsController: SettingsController,
        settingsTemplate: settingsTemplate,
        settingsStyle: settingsStyle,
        presets: presets
    };
});

export default index;
//# sourceMappingURL=widget.module.js.map
