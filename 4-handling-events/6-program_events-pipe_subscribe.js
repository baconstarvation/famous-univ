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

eventHandlerA.pipe(eventHandlerB);

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

Program Events - Pipe & Subscribe

An alternative to using .subscribe() to transmit events between two event handlers is to use .pipe() (line 19).

The end result is the same; just the implementation is different.
Whereas the listener subscribes to the emitter, when using .pipe(), the emitter pipes to the listener.

*/