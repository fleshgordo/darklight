cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "id": "cordova-plugin-brightness.Brightness",
        "file": "plugins/cordova-plugin-brightness/www/brightness.js",
        "pluginId": "cordova-plugin-brightness",
        "clobbers": [
            "cordova.plugins.brightness"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-fullscreen": "1.1.0",
    "cordova-plugin-brightness": "0.1.5"
};
// BOTTOM OF METADATA
});