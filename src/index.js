import widgetController from './widget/widget.controller.js';
import widgetTemplate from './widget/widget.template.html';
import widgetStyle from './widget/widget.scss';

import settingsController from './settings/settings.controller.js';
import settingsTemplate from './settings/settings.template.html';
import settingsStyle from './settings/settings.scss';

import defaultPresets from './presets';

export default (options) => {

    options = options || {};

    let presets = options.presets || defaultPresets;

    return {
        widgetController,
        widgetTemplate,
        widgetStyle,
        settingsController,
        settingsTemplate,
        settingsStyle,
        presets,
    };
};