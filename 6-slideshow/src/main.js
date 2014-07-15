/*** main.js ***/

define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');

  // import Utility
    var Utility = require('famous/utilities/Utility');
    
  // import the AppView class using require
    var AppView = require('views/AppView');

  // import SlideData
    var SlideData = require('data/SlideData');

    var mainContext = Engine.createContext();

  // simple Get request to the Picasa api with callback
    Utility.loadURL(SlideData.getUrl(), initApp);


    function initApp(data) {
      // parses out response data and retrieves array of urls
        data = SlideData.parse(data);

      // instantiates AppView with our url data
        var appView = new AppView({ data : data });

    }


/*
  // import the SlideShowView class using require
  	var SlideShowView = require('views/SlideShowView');

  // import the SlideView class using require
  	var SlideView = require('views/SlideView');

  // create a new instance of app view
    var appView = new AppView();

	// add the app view instance to the context
    mainContext.add(appView);

  // create a new instance of slideshow view
  	var slideShowView = new SlideShowView();

	// add the slide view instance to the context
		mainContext.add(slideShowView);

  // create a new instance of slide view
  	var slideView = new SlideView();
*/

	// add the slide view instance to the context
		mainContext.add(slideView);

});
