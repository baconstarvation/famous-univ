var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');
var View = require('famous/core/View');

// align and origin take values in the form of [x, y]
// with each value ranging between 0 and 1
// [0, 0] refers to upper-left
// [1, 1] refers to bottom-right

var align = [0.5, 0.5];
var origin = [0.5, 0.5];

// ***************************************************//
// don't worry about the code below                   //
// you'll learn how to create views in future lessons //
// ***************************************************//

var mainContext = Engine.createContext();

var view = new View();

view.add(new Surface({
	properties: {
		backgroundColor: '#FA5C4F'
	}
}));

var viewModifier = new StateModifier({
	size: [200, 200],
	origin: origin,
	align: align
});

var positions = [
	[0, 0],
	[0, 1],
	[1, 0],
	[1, 1]
];

for (var i = 0; i < positions.length; i++) {
	var surface = new Surface({
		size: [true, true],
		content: 'origin:<br>' + positions[i]
	});

	var modifier = new StateModifier({
		origin: positions[i],
		align: positions[i]
	});

	view.add(modifier).add(surface);
}

mainContext.add(viewModifier).add(View);

for (var i = 0; i < positions.length; i++) {
	var surface = new Surface({
		size: [true, true],
		content: 'align:<br>' + positions[i]
	});

	var modifier = new StateModifier({
		origin: positions[i],
		align: positions[i]
	});

	mainContext.add(modifier).add(surface);
}



/*
Align and Origin

Align and origin are used to position a child element within its parent container.

Align specifies the anchor location on the parent element.
Origin specifies the anchor location on the child element.
In this example, the anchor positions for both the child view (set by origin) and the parent context
(set by align) are horizontally and vertically center. Thus, the surface is centered in the context.

Try moving the red square to the following positions in the context:

horizontal center, top align
vertical center, right align
bottom-right corner
bottom-left corner
Notice a pattern?
*/
