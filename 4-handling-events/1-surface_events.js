var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [undefined, 100],
  content: 'click me',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(surface);

surface.on('click', function() {
  surface.setProperties({
    backgroundColor: '#878785'
  });
});


/*
Surface Events

Famo.us surfaces capture all the familiar DOM events listed below.

You can register these events with a callback function using the .on() method.

Surface events:

click
mousedown
mousemove
mouseup
mouseover
mouseout
touchstart
touchmove
touchend
touchcancel
keydown
keyup
keypress
*/
