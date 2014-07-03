var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');
var Easing = require('famous/transitions/Easing');

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

stateModifier.setTransform(
	Transform.translate(0, 300, 0),
	{ duration : 1000, curve: Easing.inExpo }
);

stateModifier.setTransform(
	Transform.translate(100, 300, 0),
	{ duration : 800, curve: Easing.outElastic },
	function() {
		surface.setContent('finished');
	}
);

/*


simply call .setTransform() again with the next transform in the animation sequence.
The state modifier's current animation will finish before executing the next.

*Note that this method only works for chaining .setTransform() on the same state modifier.
If you want to chain animations between modifiers, use a completion callback.

*/