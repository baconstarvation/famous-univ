// Adding Content

var Engine = require('famous/core/engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
	content: 'hello world'
});

// Content can be a strimg, HTML, or a DOM element.
// The content can be set during instantiation or by the .setContent() method.
firstSurface.setContent('<h1>HELLO WORLD</h1>');

mainContext.add(firstSurface);