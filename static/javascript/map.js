requirejs.config({
  paths: {
    jquery: "/vendor/jquery",
  }
});

define(['jquery'], function ($) {
  var _ = window._,
      Map = function(svg) {
        this.svg = $(svg);
      };

  var _mpro = Map.prototype;

  _mpro.paint = function(specifier) {
    /* Paint the regions with the colours specified. */
    var self = this;

    _.each(_.keys(specifier), function(key) {
      /* For each of the states specified, update the color */
      $(self.svg).find('#' + key).css('fill', specifier[key]);
    });
  };

  return Map;
});
