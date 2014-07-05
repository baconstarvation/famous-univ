var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var StateModifier = require('famous/modifiers/StateModifier');
var EventHandler = require('famous/core/EventHandler');

var mainContext = Engine.createContext();
var surface;
createSurface();
var eventHandler = new EventHandler();

surface.on('click', function() {
	eventHandler.emit('hello');
});

eventHandler.on('hello', function() {
	surface.setContent('heard hello');
});

function createSurface() {
	surface = new Surface({
		size: [100, 100],
		content: 'A<br>click me to emit "hello"',
		properties: {
			color: 'white',
			textAlign: 'center',
			backgroundColor: '#FA5C4F'
		}
	});

	mainContext.add(surface);
}


/*

Program Events - Event Handlers

Events are a way of moving information between program modules in a decoupled way.
In Famo.us we emit, transmit, and listen to program events using Event Handler objects.

In this example, we have a simple emit and listen pattern using one event handler.

*/