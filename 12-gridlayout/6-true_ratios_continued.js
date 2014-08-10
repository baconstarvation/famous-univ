var Engine = require("famous/core/Engine");
var Surface = require("famous/core/Surface");
var GridLayout = require("famous/views/GridLayout");
var StateModifier = require("famous/modifiers/StateModifier");

var mainContext = Engine.createContext();

var grid = new GridLayout({
	dimensions: [4, 2]
});

var surfaces = [];
grid.sequenceFrom(surfaces);

for(var i = 0; i < 5; i++) {
 surfaces.push(new Surface({
 content: "panel " + (i + 1),
 size: [undefined, undefined],
 properties: {
	 backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
	 color: "#404040",
	 lineHeight: '200px',
	 textAlign: 'center'
 }
 }));
}

var stateModifier = new StateModifier({
	size: [400, 200]
});

mainContext.add(stateModifier).add(grid);