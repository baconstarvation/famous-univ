var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

// Creating a new context.
var mainContext = Engine.createContext();

// Create a new surface by instantiating it from the Surface.
var firstSurface = new Surface({
	// Displaying a simple hello world message inside the first surface
	content: 'hello world'
});

// Add the surface to the context using the .add() method.
mainContext.add(firstSurface);