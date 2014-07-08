/*** SlideShowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

		// Import additional modules to be used in this view
		var View = require('famous/core/View');
		var Surface = require('famous/core/Surface');
		var Transform = require('famous/core/Transform');
		var StateModifier = require('famous/modifiers/StateModifier');

		// Constructor function for our SlideShowView class
		function SlideShowView() {

				// Applies View's constructor function to SlideShowView class
				View.apply(this, arguments);
		}

		// Establishes prototype chain for SlideShowView class to inherit from View
		SlideShowView.prototype = Object.create(View.prototype);
		SlideShowView.prototype.constructor = SlideShowView;

		// Default options for SlideShowView class
		SlideShowView.DEFAULT_OPTIONS = {};

		// Define your helper functions and prototype methods here

		module.exports = SlideShowView;
});



// subclass of the view class & inherits its prototype objects & methods


// contains the following:

// A render node that all the components in our view will attach to

// Event input and output handlers

// Options extended from the default options & the options passed in during
// instantiation