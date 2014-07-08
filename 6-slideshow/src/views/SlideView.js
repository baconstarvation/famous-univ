/*** SlideView ***/

define(function(require, exports, module) {
		var View = require('famous/core/View');
		var Surface = require('famous/core/Surface');
		var Transform = require('famous/core/Transform');
		var StateModifier = require('famous/modifiers/StateModifier');

		function SlideView() {
				View.apply(this, arguments);

				this.rootModifier = new StateModifier({
						size: [400, 450]
				});

        // saving a reference to the new node
        this.mainNode = this.add(this.rootModifier);
		}

		SlideView.prototype = Object.create(View.prototype);
		SlideView.prototype.constructor = SlideView;

		SlideView.DEFAULT_OPTIONS = {};

		module.exports = SlideView;
});



/*

Although we've added multiple views to the render tree, if we check out browser,
we won't actually see anything. That's because we haven't added any surfaces. Unlike
surfaces, views don't actually map to DOM elements. They're empty render nodes with
extra features.

One feature views don't have by default is a size. To specify a size, we have to manually
create a state modifier and add it to the view. Let's do that now for our slide view.

After adding the state modifier, we save a reference to the new render node.
Everything added below this node will inherit the size of the modifier we just created.
We will be adding this node as we create our surfaces.

*/