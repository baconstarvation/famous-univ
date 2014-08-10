var Engine = require("famous/core/Engine");
var Surface = require("famous/core/Surface");
var SequentialLayout = require("famous/views/SequentialLayout");

var mainContext = Engine.createContext();

var sequentialLayout = new SequentialLayout({
	direction: 0
});

var surfaces = [];

sequentialLayout.sequenceFrom(surfaces);

for (var i = 0; i < 10; i++) {
	surfaces.push(new Surface({
		size: [undefined, 50],
		properties: {
			backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%",
	}
	}));
}

mainContext.add(sequentialLayout);