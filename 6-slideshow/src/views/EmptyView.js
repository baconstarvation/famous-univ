/*** EmptyView ***/





/*** EmptyView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // Constructor function for our EmptyView class
    function EmptyView() {

        // Applies View's constructor function to EmptyView class
        View.apply(this, arguments);
    }

    // Establishes prototype chain for EmptyView class to inherit from View
    EmptyView.prototype = Object.create(View.prototype);
    EmptyView.prototype.constructor = EmptyView;

    // Default options for EmptyView class
    EmptyView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = EmptyView;
});





// subclass of the view class & inherits its prototype objects & methods


// contains the following:

// A render node that all the components in our view will attach to

// Event input and output handlers

// Options extended from the default options & the options passed in during
// instantiation