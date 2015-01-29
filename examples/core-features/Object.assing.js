/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var worker = {};

var canEat = {
  food: 'nothing',
  eat: function() {
    console.log('eats ' + this.food); // template string (part of ES6)
  }
};

Object.assign(worker, canEat);

worker1 = Object.create(worker);
worker2 = Object.create(worker);
worker2.food = 'apple';

worker2.eat();