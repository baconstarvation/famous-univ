var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var downMod = new StateModifier({
  transform: Transform.translate(0, 100, 0)
});

var rightMod = new StateModifier({
  transform: Transform.translate(150, 0, 0)
});

var leftSurface = new Surface({
  size: [120, 100],
  content: 'left surface',
  properties: {
    color: 'white',
    backgroundColor: '#FA5C4F'
  }
});

var rightSurface = new Surface({
  size: [120, 100],
  content: 'right surface',
  properties: {
    color: 'white',
    backgroundColor: '#404040'
  }
});

var node = mainContext.add(downMod);
node.add(leftSurface);
node.add(rightMod).add(rightSurface);

/*
Branching Modifiers

We can also use modifier branching to move items together.

Both surfaces get downMod applied but the right surface also has rightMod applied.

This is done by saving a reference to the node in the render tree after
downMod has been added then adding to that reference node.
*/