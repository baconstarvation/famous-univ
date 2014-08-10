var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var StateModifier = require('famous/modifiers/StateModifier');
var FlexibleLayout = require('famous/views/FlexibleLayout');

var mainContext = Engine.createContext();

var colors = [
	'rgba(256, 0, 0, .7)',
	'rgba(0, 256, 0, .7)',
	'rgba(0, 0, 256, .7)'
];

var ratios = [1, true, 2, 1, true, 2, 1, true, 2];
var layout = new FlexibleLayout({
	ratios: ratios
});

var surfaces = [];


for (var i = 0; i < 9; i++) {
 var size = i % 3 === 1 ? [20, undefined] : [undefined, undefined];
	surfaces.push(new Surface({
		size: size,
		properties: {
			backgroundColor: colors[i % 3]
		}
	}));
}

layout.sequenceFrom(surfaces);

mainContext.add(layout);