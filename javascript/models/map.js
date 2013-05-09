if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['underscore', 'backbone'],
  function(_, Backbone) {
    var Map = Backbone.Model.extend({
      startColor : '#ff9900',
      endColor   : '#0099ff',
      values     : {}
    });

    return Map;
  }
);
