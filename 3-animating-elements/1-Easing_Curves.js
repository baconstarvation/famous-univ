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
	Transform.translate(100, 300, 0),
	{ duration : 1000, curve: Easing.inOutBack }
);

/*

Easing Curves

Famo.us has a library of over 30+ easing curves that can be accessed through our Easing methods. They're really fun to play with.

inQuad
outQuad
inOutQuad
inCubic
outCubic
inOutCubic
inQuart
outQuart
inOutQuart
inQuint
outQuint
inOutQuint
inSine
outSine
inOutSine
inExpo
outExpo
inOutExpo
inCirc
outCirc
inOutCirc
inElastic
outElastic
inOutElastic
inBack
outBack
inOutBack
inBounce
outBounce
inOutBounce

*/