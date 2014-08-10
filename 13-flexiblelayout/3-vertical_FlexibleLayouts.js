var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var FlexibleLayout = require('famous/views/FlexibleLayout');

var mainContext = Engine.createContext();

var colors = [
	'rgba(256, 0, 0, .7)',
	'rgba(0, 256, 0, .7)',
	'rgba(0, 0, 256, .7)'
];

var ratios = [1, 3, 5];
var layout = new FlexibleLayout({
	direction: 1,
	ratios: ratios
});

var surfaces = [];


for (var i = 0; i < 2; i++) {
	surfaces.push(new Surface({
		size: [undefined, undefined],
		properties: {
			backgroundColor: colors[i % 3]
		}
	}));
}

layout.sequenceFrom(surfaces);

mainContext.add(layout);