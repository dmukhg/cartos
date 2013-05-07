
define([], function () {
  var colours = {
    darkGrey  : [73, 105, 122],
    lightGrey : [204, 237, 255] 
  } 
 
  , rgbToString = function (r, g, b) {
    r = Math.ceil(r);
    g = Math.ceil(g);
    b = Math.ceil(b);

    return "rgb(" + r + ","+ g + "," + b + ")";
  }

  , interpolate = function() {
    var c = colours; // local reference to save lookups

    if (arguments.length == 1) {
      // Use the only argument (between 0 and 1) to return a grayscale colour.
      var c1 = c.lightGrey,
          c2 = c.darkGrey; 

      var r = arguments[0] * ( c1[0] - c2[0] ) + c2[0]
        , g = arguments[0] * ( c1[1] - c2[1] ) + c2[1]
        , b = arguments[0] * ( c1[2] - c2[2] ) + c2[1];

      return rgbToString(r,g,b);
    }

    if (arguments.length == 3) {
      // Use the specified colours to interpolate
      var c2 = arguments[1],
          c1 = arguments[2];
      
      var r = arguments[0] * ( c1[0] - c2[0] ) + c2[0]
        , g = arguments[0] * ( c1[1] - c2[1] ) + c2[1]
        , b = arguments[0] * ( c1[2] - c2[2] ) + c2[1];

      return rgbToString(r,g,b);
    }
  };

  return interpolate;
});
