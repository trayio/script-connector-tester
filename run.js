var input = require('./input.json');
// Ignore the `script` part of the input - use the `script.js` instead
var step = require('./script').step;

// Add in the global variables
global._ = require('lodash');
global.mout = require('mout');
global.moment = require('moment');


var variables = {};
input.variables.forEach(function (variable) {
  variables[variable.name] = variable.value;
});


console.log(step(variables));