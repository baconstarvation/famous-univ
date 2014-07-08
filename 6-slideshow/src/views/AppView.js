/*** AppView ***/

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function AppView() {
        View.apply(this, arguments);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {};

    module.exports = AppView;
});



// subclass of the view class & inherits its prototype objects & methods


// contains the following:

// A render node that all the components in our view will attach to

// Event input and output handlers

// Options extended from the default options & the options passed in during
// instantiation