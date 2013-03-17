requirejs.config({
  paths: {
    jquery: "/vendor/jquery",
  }
});

define(['jquery'], function ($) {
  var _ = window._,
      Backbone = window.Backbone,
      Cartos = function(svg) {
    this.svg = $(svg);
  };

  var _cpro = Cartos.prototype;

  _cpro.paint = function(specifier) {
    /* Paint the regions with the colours specified. */
    var self = this;

    _.each(_.keys(specifier), function(key) {
      /* For each of the states specified, update the color */
      $(self.svg).find('#' + key).css('fill', specifier[key]);
    });
  };

  _cpro.interpolate = function(start, end, specifier, minimum, maximum) {
    /* Interpolate from start to end (colors) based on (optional) minimum and
     * maximum values. Also, paint using this new information */
    var self = this, max, min;

    if (!maximum || !minimum) {
      /* Compute the max and min values from within the specifier */
      var values = _.values(specifier);

      max = _.max(values);
      min = _.min(values);
    } else {
      max = maximum;
      min = minimum;
    }
  };

  return Cartos;
});
