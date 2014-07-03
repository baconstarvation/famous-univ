var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var surface = new Surface({
	size: [100, 100],
	properties: {
		color: 'white',
		textAlign: 'center',
		backgroundColor: '#FA5C4F'
	}
});

var stateModifier = new StateModifier();

mainContext.add(stateModifier).add(surface);

// In the Positioning module, we pass in the transform during the instantiation of our state modifier.
// We can also set the transform using the .setTransform() method.
stateModifier.setTransform(
	// transition object:
	Transform.translate(100, 300, 0), // defines the animation, how the transform should transition from its current value to the value specified.
	// callback function:
	{ duration : 1000, curve: 'easeInOut' } // Here we define the duration of the transition to be 1000 ms and the easing curve to be a standard ease in, ease out.
);