var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var surface = new Surface({
	size: [undefined, 100],
	content: 'press a key in the preview window',
	properties: {
		color: 'white',
		textAlign: 'center',
		backgroundColor: '#FA5C4F'
	}
});

mainContext.add(surface);

Engine.on('keydown', function(e) {
	surface.setContent(e.which);
});




/*
Engine Events

Document events have the opportunity to first be intercepted at the Famo.us Surface upon
which the event occurs, then by the on() method of the Context containing that surface,
and finally as a default, the Engine itself.

Listening on Engine events is a catch-all but in most applications,
you'll want to capture the events at a lower level.

*/