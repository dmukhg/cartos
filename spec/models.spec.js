if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../javascript/models/map.js"], function (Map) {
  var m = new Map({'startColor': '#ff9999', 'endColor': '#558888'});

  describe("Map", function () {
    it("should respect constructor arguments", function () {
      expect('#ff9999').toEqual(m.get('startColor'));
      expect('#558888').toEqual(m.get('endColor'));
    });

    it("should update on calling set", function () {
      m.set('startColor', '#898989');
      expect('#898989').toEqual(m.get('startColor'));

      m.set('endColor', '#454545');
      expect('#454545').toEqual(m.get('endColor'));
    });
  });
});
