var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
	size: [200],
	content: 'anthony',
	properties: {
		color: 'white',
		textAlign: 'center',
		backgroundColor: '#FA5C4F',
    fontSize: '40px',
    borderRadius: '15px'
	}
});

mainContext.add(firstSurface);