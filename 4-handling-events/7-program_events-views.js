var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var View = require('famous/core/View');

var mainContext = Engine.createContext();

var myView = new View();
mainContext.add(myView);

var surface = new Surface({
	size: [100, 100],
	content: 'click me',
	properties: {
		color: 'white',
		textAlign: 'center',
		backgroundColor: '#FA5C4F'
	}
});

myView.add(surface);

surface.pipe(myView);
// alternatively, myView.subscribe(surface);

// normally inside view module's code
myView._eventInput.on('click', function() {
	surface.setContent('hello');
});


/*

Program Events - Views

Views are important tools in Famo.us to help keep our code organized and modularized.
One way views help us do this is by providing two event handlers: an input and an output.

When you pipe into a view or subscribe from a view,
you're actually piping into or subscribing from the input event handler of a view,
called view._eventInput.

Conceptually, a view's input handler is the aggregation point of all the events coming into that view.
The view can then decide what to do with those events by listening on it's _eventInput.

Normally, this logic lives inside a view's module code (hence the underscore before _eventInput)
and you'll learn that pattern in the Timbre Menu project.

*/