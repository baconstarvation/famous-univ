var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var StateModifier = require('famous/modifiers/StateModifier');
var EventHandler = require('famous/core/EventHandler');

var mainContext = Engine.createContext();

var surfaceA, surfaceB;
createSurfaces();

var eventHandlerA = new EventHandler();
var eventHandlerB = new EventHandler();

surfaceA.on('click', function() {
  eventHandlerA.emit('hello');
  surfaceA.setContent('said hello');
});

eventHandlerB.subscribe(eventHandlerA);

eventHandlerB.on('hello', function() {
  surfaceB.setContent('heard hello');
});

function createSurfaces() {
  surfaceA = new Surface({
    size: [100, 100],
    content: 'A<br>click me to say hello',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  surfaceB = new Surface({
    size: [100, 100],
    content: 'B',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  var modifierB = new StateModifier({
    origin: [1, 1]
  });

  mainContext.add(surfaceA);
  mainContext.add(modifierB).add(surfaceB);
}



/*
Program Events - Event Handlers

More commonly, you'll use multiple event handlers to communicate between application modules.
In this example, we have two event handlers, A and B.

Event handler A emits 'hello' when surface A is clicked.

Event handler B listens for the 'hello' event and calls surface B to set its content
when the event is triggered.

This logic alone does not produce any results when surface A is clicked because the two event handlers
are not transmitting to each other. To do so, event handler B has to subscribe to event handler A using
.subscribe() (line 19).

When event handler B subscribes to event handler A, all events emitted from event handler A
will be heard by event handler B.

*/






