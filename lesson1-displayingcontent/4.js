var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
	// Specifying size in pixels with [x, y]
	size: [200, 400],
	content: 'hello world',
	properties: {
		color: 'white',
		textAlign: 'center',
		backgroundColor: '#FA5C4F'
	}
});

mainContext.add(firstSurface);

// Other ways to Size:
	// Specify size in only one dimension with [undefined, y] or [x, undefined]
	// Have the surface auto-size according to the content with [true, true]
