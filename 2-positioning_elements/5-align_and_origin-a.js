var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var surface = new Surface({
	size: [200, 500],
	properties: {
		color: 'white',
		backgroundColor: '#FA5C4F'
	}
});

var modifier = new StateModifier({
	align: [0.5, 0.5],
	origin: [0.5, 0.5]
});

mainContext.add(modifier).add(surface);

/*
Align and Origin

Another very useful way to position elements in Famo.us is to use align and origin.

The align and origin properties can be set in a modifier much similarly to the transform property.
*/