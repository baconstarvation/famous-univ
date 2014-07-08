/*** main.js ***/

define(function(require, exports, module) {
		var Engine = require('famous/core/Engine');

		// import the AppView class using require
		var AppView = require('views/AppView');

		var mainContext = Engine.createContext();

	// create a new instance of app view
		var appView = new AppView();

	// create a new instance of our slideshow view
		var slideshowView = SlideShowView();

	// add the instance to the context
		mainContext.add(appView);
});