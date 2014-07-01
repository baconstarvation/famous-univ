





var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var StateModifier = require('famous/modifiers/StateModifier');
var Transform = require('famous/core/Transform');

var mainContext = Engine.createContext();

var translateModifierOne = new StateModifier({
  transform: Transform.translate(200, 0, 0)
});

var translateModifierTwo = new StateModifier({
  transform: Transform.translate(200, 0, 0)
});

var rotateModifierOne = new StateModifier({
  transform: Transform.rotateZ(Math.PI/4)
});

var rotateModifierTwo = new StateModifier({
  transform: Transform.rotateZ(Math.PI/4)
});

var redSurface = new Surface({
  size: [100, 100],
  classes: ['red-bg']
});

var greySurface = new Surface({
  size: [100, 100],
  classes: ['grey-bg']
});

mainContext
  .add(translateModifierOne)
  .add(rotateModifierOne)
  .add(redSurface);

mainContext
  .add(rotateModifierTwo)
  .add(translateModifierTwo)
  .add(greySurface);


/*
Chaining Modifiers

Modifiers are nodes in the Famo.us render tree and as nodes, they can be chained.

In this example, we're chaining a translate modifier with a rotate modifier.

Be careful The order that you chain modifiers matters!

In this example, we can see that both the red and grey surfaces are affected by a rotation of PI/4 
around the z-axis and a translation of 200px to the right.

The red surface has its translation applied before the rotation which results in it being moved over right,
and then rotated around its origin, the top left corner of itself.

This is different for the grey surface. Because the rotation happens first,
when the translation is calculated, the grey surface's translation occurs along a vector that starts at '
the top left corner and travels out at an angle of PI/4 clockwise from the top. 
This results in the grey surface appearing to the left and below the red surface.
*/

