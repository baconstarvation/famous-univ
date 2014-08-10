var Engine = require("famous/core/Engine");
var Surface = require("famous/core/Surface");
var SequentialLayout = require("famous/views/SequentialLayout");
var StateModifier = require("famous/modifiers/StateModifier");

var mainContext = Engine.createContext();

var sequentialLayout = new SequentialLayout();

var renderables = [];

sequentialLayout.sequenceFrom(renderables);

renderables.push(new Surface({
	size: [undefined, 100],
	properties: {
		backgroundColor: "rgba(256, 0, 0, .7)",
	}
}));

var view = new View();

view.add(new Surface({
	size: [undefined, 300],
	properties: {
		zIndex: 1,
		backgroundColor: "rgba(0, 0, 0, 1)",
	}
}));

view.add(new Surface({
	size: [undefined, 100],
	properties: {
		zIndex: 2,
		backgroundColor: "rgba(0, 256, 0, .7)",
	}
}));

renderables.push(view);

renderables.push(new Surface({
	size: [undefined, 100],
	properties: {
		backgroundColor: "rgba(0, 0, 256, .7)",
	}
}));

mainContext.add(sequentialLayout);