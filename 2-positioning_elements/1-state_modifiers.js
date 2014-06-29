var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

// The state modifier has a transform property where the x- and y-translation values are defined.
var stateModifier = new StateModifier({
	// translating a surface 150px to the right and 100px from the top.
	transform: Transform.translate(150, 100, 0)
});

var surface = new Surface({
	size: [100, 100],
	properties: {
		backgroundColor: '#FA5C4F'
	}
});

// adding a .add(stateModifier) between the context and the .add(surface)
mainContext.add(stateModifier).add(surface);