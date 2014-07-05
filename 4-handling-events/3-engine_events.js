var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var surface = new Surface({
	size: [undefined, 100],
	content: 'resize your browser window',
	properties: {
		color: 'white',
		textAlign: 'center',
		backgroundColor: '#FA5C4F'
	}
});

mainContext.add(surface);

Engine.on('resize', function() {
	surface.setContent('resized');
});



/*

Engine Events

The Famo.us Engine runs once every animation frame and at 60 fps; that's every 16.7 ms.
During that cycle, the Engine also emits certain events such as 'prerender' and 'postrender.'
However, due to the frequency of these events, they should be used only when absolutely necessary.

There are other Engine events that are handy though, namely 'resize.'
You can listen to the 'resize' event to make your app responsive to layout changes.

*/