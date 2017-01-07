'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WidgetController = function WidgetController($adapter, $element, $scope, moment) {
  _classCallCheck(this, WidgetController);

  this.$adapter = $adapter;
};

WidgetController.$inject = ['od.adapter.service', '$element', '$scope', 'moment'];

var widgetTemplate = "<div style=\"text-align: center; padding: 10px; width: 100%; height: 100%;\">\n  <fit-text fttext=\"'Hallo'\" ftwidth=\"'100%'\" ftheight=\"'50%'\"></fit-text>\n  <fit-text fttext=\"$ctrl.config.name\" ftwidth=\"'100%'\" ftheight=\"'50%'\" style=\"font-weight: bold;\"></fit-text>\n</div>\n";

var widgetStyle = "";

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function SettingsController() {
  _classCallCheck$1(this, SettingsController);
};

SettingsController.$inject = [];

var settingsTemplate = "<label for=\"widget-settings-name\">Hallo Welt Name</label>\n<input\n  name=\"widget-settings-name\"\n  type=\"text\"\n  placeholder=\"Name\"\n  ng-model=\"$ctrl.config.name\" />\n";

var settingsStyle = "";

var img = 'data:image/png;base64,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';

var defaultPresets = [{
    name: 'Hallo Welt Widget',
    image: img,
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

module.exports = index;
//# sourceMappingURL=widget.common.js.map
