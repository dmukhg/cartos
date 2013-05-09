// Configure paths for vendor libraries
require.config({
  paths: {
    jquery: '/vendor/require-jquery.js',
    underscore: '/vendor/underscore-min.js',
    backbone: '/vendor/backbone-min.js',
  }
});

require(['app'], function(App) {
  App.initialize();
})
