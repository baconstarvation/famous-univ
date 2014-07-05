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
	myView._eventOutput.emit('hello');
});

// listening to view's events from the outside
myView.on('hello', function() {
	surface.setContent('hello');
})







/*

Program Events - Views

Previously, we transmitted events into a view and listened to those events inside the view
at its input handler.

Now we're going to emit an event from the view and listen for that event outside of the view.

When a view broadcasts an event to the outside world, it should emit it from its output handler (line 27).
Outside of the view, we use .on() to listen for those events.

Again, the code dealing with the output handler normally lives inside the view module's code
and you'll see that pattern in the Timbre Menu project.

*/