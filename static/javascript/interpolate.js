/* Interpolate between colours. */
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

    if (arguments.length = 1) {
       // Use the only argument (between 0 and 1) to return a grayscale colour.
       var r = arguments[0] * ( c.lightGrey[0] - c.darkGrey[0] ) + c.darkGrey[0]
         , g = arguments[0] * ( c.lightGrey[1] - c.darkGrey[1] ) + c.darkGrey[1]
         , b = arguments[0] * ( c.lightGrey[2] - c.darkGrey[2] ) + c.darkGrey[2];

      return rgbToString(r,g,b);
    }
  };

  return interpolate;
});
