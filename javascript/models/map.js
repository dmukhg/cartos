if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['underscore', 'backbone'],
  function(_, Backbone) {
    var Map = Backbone.Model.extend({
      get: function (attr) {
        if (typeof(this[attr]) === 'function') {
          return this[attr]();
        }

        return Backbone.Model.prototype.get.call(this, attr);
      },

      set: function (attr, val) {
        if (typeof(this[attr]) === 'function') {
          return this[attr](val);
        }

        return Backbone.Model.prototype.set.call(this, attr, val);
      },

      startColor : '#ff9900',
      endColor   : '#0099ff',

      // _values must not be accessed outside the model except perhaps by views
      _values    : {}, 
      values     : function(new_values) {
        /* _values is an object, properties of which may be changed
         * incrementally. Say you already have data for 3 states. To add more
         * states, you needn't supply those 3 datum again. Just add the changes
         * and this method will take care.
         */
        if (new_values === undefined) {
          // Get
          return this._values;
        }

        // Set
        var old_values = this._values;

        for (a in new_values) {
          old_values[a] = new_values[a];
        }

        return this.set('_values', old_values);
      }
    });

    return Map;
  }
);
