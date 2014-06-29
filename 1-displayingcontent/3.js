var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
	content: 'hello world',
	// Styling surfaces in Famo.us is just like writing CSS,
	// Except the properties are written using camelCase instead of dashes.
	properties: {
		color: 'white',
		textAlign: 'center',
		backgroundColor: '#FA5C4F'
	}
});

mainContext.add(firstSurface);