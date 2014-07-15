/*** AppView ***/

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // import the SlideshowView class
    var SlideshowView = require('views/SlideShowView');

    function AppView() {
        View.apply(this, arguments);

        // passing in data
        var slideShowView = new SlideShowView({
            data: this.options.data
        });

        // add the instance to app view
        this.add(slideShowView);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        // it's a good idea to add a property in the default options
        // even when it's undefined
        data: undefined
    };

    module.exports = AppView;
});