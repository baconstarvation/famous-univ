/*
Physics Transitions
Instead of using easing curves to perform our animations, we can use physics transitions.
Physics transitions can give animations a more realistic feel and can be tuned more precisely.
*/

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

// Import the Transitionable class with require (line 5)
var Transitionable = require('famous/transitions/Transitionable');

// Import the SpringTransition class (line 6)
var SpringTransition = require('famous/transitions/SpringTransition');

// Register the spring transition to transition object with method 'spring' (line 7)
Transitionable.registerMethod('spring', SpringTransition);

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [100, 100],
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

var stateModifier = new StateModifier({
  origin: [0.5, 0]
});

mainContext.add(stateModifier).add(surface);

// Specify the spring parameters (line 26)
var spring = {
  method: 'spring',
  period: 1000,
  dampingRatio: 0.3
};

// Apply the transition in the .setTransform() (line 33)
stateModifier.setTransform(
  Transform.translate(0, 300, 0), spring
);















